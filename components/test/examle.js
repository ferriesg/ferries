// // const puppeteer = require("puppeteer");
// // // const jest = require("jest");

// // (async () => {
// //   const browser = await puppeteer.launch({
// //     headless:false,
// //     timeout:0
// //   });
// //   const page = await browser.newPage({timeout:0});
// //   //捕获控制台输出
// //   page.on("console", (msg) => console.log("PAGE LOG:", msg.text()));
// //   page.on("request", (request) => console.log(request));
// //   // jest.setTimeout(100000);
// //   await page.goto("https://mik.qa.platform.michaels.com");

// //   await page.evaluate(() => console.log(`url is ${location.href}`));
// //   await page.screenshot({ path: "example.png" });

// //   // await browser.close();
// // })();

// const puppeteer = require("puppeteer");

// (async () => {
//   const browser = await puppeteer.launch({
//     headless: false,
//     defaultViewport: {
//       width: 1780,
//       height: 800,
//     },
//   });

//   const page = await browser.newPage();

//   await page.setCookie({
//     name: "betaUser",
//     value: "True",
//     domain: "www.michaels.com",
//     path: "/",
//   });
//   await page.goto("https://www.michaels.com");

//   const dcComponents = await page.evaluate(() => {
//     // 此函数在浏览器打开的页面内运行
//     const height = document.documentElement.scrollHeight;
//     const zhixing = setInterval(() => {
//       console.log('111111')
//       document.documentElement.scrollTo(
//         0,
//         document.documentElement.scrollHeight
//       );
//       if (height === document.documentElement.scrollHeight) {
//         clearInterval(zhixing);
//       } else {
//         height = document.documentElement.scrollHeight;
//       }
//     }, 10);
//     return {
//       width: document.documentElement.clientWidth,
//       height: document.documentElement.clientHeight,
//       deviceScaleFactor: window.devicePixelRatio,
//     };
//   });
//   console.log(dcComponents);
// })();

const puppeteer = require("puppeteer");
const list = require("./readExsal.js");
const fs = require("fs");

class FlexCall {
  constructor(maxCall) {
    this.maxCall = maxCall;
    this._queue = [];
  }
  push(fn, context = null) {
    this._queue.push({
      fn,
      res: null,
      status: "block",
      index: this._queue.length,
      context: context,
    });
  }
  async run() {
    let arr = [];
    for (let i = 0; i < this.maxCall; i++) {
      arr.push(this.runOne());
    }
    await Promise.all(arr);
    return this._queue
      .sort((a, b) => a.index - b.index)
      .map((item) => item.res);
  }
  async runOne() {
    let unit = this._queue.filter((item) => item.status === "block")[0];
    if (!unit) {
      return true;
    } else {
      unit.status = "running";
      unit.res = await unit.fn.call(unit.context);
      unit.status = "finish";
      return await this.runOne();
    }
  }
}
(async () => {
  const flexCall = new FlexCall(10);
  list.forEach((item, index) => {
    flexCall.push(openBrower.bind(null,index + 1));
  });
  await flexCall.run();

  async function openBrower(num) {
    if (!list?.[num]?.[0]) {
      return;
    }
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: {
        width: 1780,
        height: 800,
      },
    });

    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    // await page.setCookie({
    //   // name: "betaUser",
    //   // value: "True",
    //   domain: "www.michaels.com",
    //   path: "/",
    // });
    const url = list[num][0].replace(
      "mik.uat.platform.michaels.com",
      "www.michaels.com"
    );
    await page.goto(url);

    const dcComponents = await page.evaluate(() => {
      let flag = false;
      const price = document.getElementsByClassName("product-pricing")[0];
      const number = document.getElementsByClassName("product-number")[0];
      const cart = document.getElementById("add-to-cart");
      // 此函数在浏览器打开的页面内运行
      // const height = document.documentElement.scrollHeight;
      // const zhixing = setInterval(() => {
      //   console.log('111111')
      //   document.documentElement.scrollTo(
      //     0,
      //     document.documentElement.scrollHeight
      //   );
      //   if (height === document.documentElement.scrollHeight) {
      //     clearInterval(zhixing);
      //   } else {
      //     height = document.documentElement.scrollHeight;
      //   }
      // }, 10);
      if (price && number && cart) {
        flag = true;
      }
      console.log(flag, "test");
      return {
        isPdp: flag,
        //   width: document.documentElement.clientWidth,
        //   height: document.documentElement.clientHeight,
        //   deviceScaleFactor: window.devicePixelRatio,
      };
    });

    fs.writeFile(
      `./newresult.txt`,
      `{"${url}":"${dcComponents.isPdp}"},`,
      { flag: "a" },
      function (err) {
        if (err) {
          throw err;
        }
      }
    );
    await browser.close();
  }
})();
