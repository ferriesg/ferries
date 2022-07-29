const puppeteer = require("puppeteer");
const list = require("./readExsal.js");
const fs = require("fs");
// const list = [
//   "https://mik.uat.platform.michaels.com/pro-mag-magnetic-sheet-12%22%22-x-24%22%22/10265238.html",
//   "https://mik.uat.platform.michaels.com/kids-back-to-school-supplies/classroom-decor/bts-decor",
// ];
let a = 200;
function openBrower() {
  if(a === 300){
    console.log('end node')
    return;
  }
  (async () => {
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
    const url = list[a][0].replace(
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
      `./result4.txt`,
      `{'${url}':'${dcComponents.isPdp}'},`,
      { flag: "a" },
      function (err) {
        if (err) {
          throw err;
        }
      }
    );
    a = a + 1;
    await browser.close();
    openBrower();
  })();
}
openBrower();
