const puppeteer = require("puppeteer");
const axios = require("axios");
const fs = require("fs");
async function opneBrower(path) {
  const brower = await puppeteer.launch({
    headless: false,
    defaultViewport: {
      width: 1780,
      height: 10000,
    },
  });
  async function wait(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  const page = await brower.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.setCookie({
    name: "betaUser",
    value: "True",
    domain: "https://mik.prod.platform.michaels.com/",
    path: "/",
  });

  // await page.goto("https://mik.prod.platform.michaels.com/");

  //20s 就执行  而不是等待页面加载完
  page.goto(`https://mik.prod.platform.michaels.com/${path}`);
  await wait(10000);

  // const performance = await page.getMetrics();
  // await page.evaluate(() => {
  // document.documentElement.scrollTo(0, 1000);
  // const goHeight = 0;
  // const newIntercal = setInterval(() => {
  //   if (document.documentElement.clientHeight <= goHeight) {
  //     console.log(2)
  //     clearInterval(newIntercal);
  //   } else {
  //     console.log(1)
  //     goHeight = goHeight + 300;
  //   }
  // }, 1000);
  // });
  // await wait(5000);
  const dimensions = await page.evaluate(async () => {
    const newArr = [];
    const allATag = [...document.getElementsByTagName("a")];
    allATag.forEach((item) =>
      newArr.push({ class: item.class, id: item.id, href: item.href })
    );
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio,
      ArrE: newArr,
    };
    // await page.goto();
    // 在这里可以进行DOM操作
  });
  // console.log(dimensions.ArrE)
  let result = [];
  // Promise.all([ffffff])=>{
  //   dimensions.ArrE.forEach(async (item, index) => {
  //     console.log(index);
  //     item.href &&
  //       (await axios
  //         .get(item.href, {})
  //         .then((res) => {
  //           console.log("");
  //           if (res.status == "200") {
  //             resolve();
  //           } else {
  //             console.log('errorr1')
  //             result.push([`{href:"${item.href}",status:"${res.status}"}`])
  //             fs.writeFile(
  //               "require.txt",
  //               `[{href:"${item.href}",status:"${res.status}"}],`,
  //               { flag: "a" },
  //               function (err) {
  //                 if (err) {
  //                   throw err;
  //                 }
  //               }
  //             );
  //             resolve();
  //           }
  //         })
  //         .catch((error) => {
  //           console.log('errorr2')
  //           result.push([`{href:"${item.href}",status:"error"}`])
  //           fs.writeFile(
  //             "require.txt",
  //             `[{href:"${item.href}",status:"error"}],`,
  //             { flag: "a" },
  //             function (err) {
  //               if (err) {
  //                 throw err;
  //               }
  //             }
  //           );
  //           resolve();

  //         }));
  //   });
  // })
  const promissall = new Set();
  const promise2 = [];
  dimensions.ArrE.forEach(async (item, index) => {
    let aa =
      item.href &&
      new Promise((resolve, reject) => {
        axios
          .get(item.href)
          .then((res) => {
            if (res.status == 200) {
              // result.push([`{href:"${item.href}",status:"${res.status}"}`]);
              resolve();
            } else {
              result.push([`{href:"${item.href}",status:"${res.status}"}`]);
              resolve();
              // fs.writeFile(
              //   "require.txt",
              //   `[{href:"${item.href}",status:"${res.status}"}],`,
              //   { flag: "a" },
              //   function (err) {
              //     if (err) {
              //       throw err;
              //     }
              //   }
              // );
            }
          })
          .catch((error) => {
            result.push([`{href:"${item.href}",status:"error"}`]);
            resolve();
            // fs.writeFile(
            //   "require.txt",
            //   `[{href:"${item.href}",status:"error"}],`,
            //   { flag: "a" },
            //   function (err) {
            //     if (err) {
            //       throw err;
            //     }
            //   }
            // );
          });
      });
    promissall.add(aa);
    promise2.push(aa);
  });
  Promise.all(promise2)
    .then((res) => {
      fs.writeFile(
        `${path}.js`,
        JSON.stringify(result),
        { flag: "a" },
        function (err) {
          if (err) {
            throw err;
          }
        }
      );
    })
    .catch((error) => console.log(error));
}

opneBrower("coupons");
