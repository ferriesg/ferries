// // import fetch from 'node-fetch'、
// const axios = require("axios");
// // const FormData = require("form-data")
// // const formData1 = new FormData();

// (function () {
//   let targetPhone = "17837208721";
//   // formData1.append("mobile", "15237270713");
//   // formData1.append("smsform", "1");
//   const list = [
//     {
//       method: "post",
//       url: "https://www.xiu.top/Account/SendVerify",
//       params: {
//         isSignUp: true,
//         phone: targetPhone,
//         userName: targetPhone,
//       },
//       message:"美橙 容易失败"
//     },
//     {
//       method: "post",
//       url: "https://user.ifeng.com/api/v1/sendsms?platform=w&systemid=1",
//       params: {
//         mobile: targetPhone,
//         smsform: 1,
//       },
//       message:"凤凰网    60s"
//     },
    
//     {
//       method: "get",
//       url: `https://m.wanzhoumo.com/proxy?api_path=%2Fuser%2Fmobilelogincode&v=3.0&fields_version=3.3&mobile=${targetPhone}`,
//       message:'error'
//     },
//     {
//       method: "get",
//       url: `https://jdapi.jd100.com/uc/v1/getSMSCode?account=${targetPhone}&sign_type=1&use_type=1`,
//     },
//     {
//       method: "get",
//       url: `http://user.daojia.com/mobile/getcode?mobile=${targetPhone}`,
//       message: '每日有次数'
//     },
    
//   ];

//   list.forEach(async (item) => {
//     if (item.method === "get") {
//       await axios.get(item.url).then((res) => {
//         console.log(res);
//       });
//     }else{
//       await axios.post(item.url, item.params).then((res) => {
//         console.log(res);
//       });
//     }
//   });
//   // const data = {
//   //   isSignUp: true,
//   //   phone: "15237270715",
//   //   userName: "15237270715",
//   // };
//   async function sendCode() {
//     await axios.post(list[2].url, list[2].params).then((res) => {
//       console.log(res);
//     });
//   }
//   sendCode();

//   // const interVAl = setInterval(async () => {
//   //   await sendCode();
//   // }, 4000);
//   // setTimeout(() => {
//   //   clearInterval(interVAl);
//   // }, 100000);
// })();
