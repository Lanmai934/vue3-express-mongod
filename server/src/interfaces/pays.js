var express = require('express')
var router = express.Router()
const Goods = require('../dbs/models/goods')

const alipaySdk = new AlipaySdk({
    appId: "2016101300679617", // 沙箱中的 appId
    privateKey: fs.readFileSync(
      path.join(__dirname, "../alipay_key/app_private_key.pem"),
      "ascii"
    ), // 应用私钥字符串
    signType: "RSA2", // 签名算法,默认 RSA2
    alipayPublicKey: fs.readFileSync(
      path.join(__dirname, "../alipay_key/alipay_public_key.pem"),
      "ascii"
    ), // 支付宝公钥，需要对结果验签时候必填
    gateway: "https://openapi.alipaydev.com/gateway.do", // 支付宝网关地址 ，沙箱环境下使用时需要修改
    timeout: 5000,
    camelcase: true,
  });

  router.get("/api/pay", async (req, res) => {
    //获取请求参数
    var price = req.query.price;
    var beizhu = req.query.beizhu;
    //创建订单号
    const outTradeNo = Date.now() + "2088621955349974";
    //向支付宝申请支付
    const formData = new AlipayFormData();
    formData.setMethod("get");
    formData.addField("appId", "2016101300679617"); //沙箱环境appID
    formData.addField("charset", "utf-8");
    formData.addField("signType", "RSA2");
    formData.addField(
      "timestamp",
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
    );
    formData.addField("bizContent", {
      outTradeNo: outTradeNo, //【必选】商户订单号：64个字符内，包含数字，字母，下划线；需要保证在商户端不重复
      productCode: "FAST_INSTANT_TRADE_PAY", //【必选】销售产品码，目前仅支持FAST_INSTANT_TRADE_PAY
      totalAmount: price, //【必选】订单总金额，精确到小数点后两位,这里是从前台支付时获取的
      subject: "商城订单",
      body: beizhu,
      timestamp: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
    });
    // 支付成功之后返回的界面
    formData.addField("returnUrl", "https://www.taobao.com/");
    // 获取支付的url链接地址
    const payurl = await alipaySdk.exec(
      // "alipay.trade.page.pay",   //电脑网站支付
      "alipay.trade.wap.pay",  //手机网站支付
      {},
      {
        formData: formData,
      }
    );
     
    
  
    //向数据库存入订单数据
      let sql = `insert into orders value('${outTradeNo}','${price}','${beizhu}','${payurl}','未支付')`;
    //console.log("新订单sql语句：============>", sql);
    req.db.driver.execQuery(sql, async (err, datas) => {
      // 4.0 判断是否异常
      if (err) {
        res.end("err");
        return;
      }
      //返回支付url链接地址
      return res.json(payurl);
    });
  });



module.exports = router;