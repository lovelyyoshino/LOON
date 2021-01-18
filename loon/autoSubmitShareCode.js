/*
 * @Author: ZXG 
 * @Date: 2020-12-03 09:23:24 
 * @Last Modified by: ZXG
 * @Last Modified time: 2021-01-14 14:11:04
 * 
 */

// zd：种豆得豆
// nc：东东农场
// mc：东东萌宠
// ddgc：东东工厂
// jxgc：京喜工厂
// jdzz: 京东赚赚
// crazy: 疯狂的JOY
// cash: 签到领现金

// ★每月1号、10号、20号 02:00清理一次数据库，清理后需重新点击链接提交互助码★
// ☆每月1号、10号、20号【02:01】自动运行脚本 提交互助码到数据库☆

const $ = new Env("自动提交互助码");
const shareCodes = [

  // xin
  {
    zd: $.getdata("zd_shareCode1") || "mlrdw3aw26j3xtlnoc5rovsdcl364xjx4ctvrhq",
    nc: $.getdata("nc_shareCode1") || "554359d55fcc4a1fab5f17a946cbf338",
    mc: $.getdata("mc_shareCode1") || "MTE1NDQ5MzYwMDAwMDAwMzkwMTMzNTk=",
    ddgc: $.getdata("dd_shareCode1") || "T0225KkcRR5K9QfSJxL2kPBcdACjVWnYaS5kRrbA",
    jxgc: $.getdata("jx_shareCode1") || "7cgl2Xm_soDzanE7bzNVdA==",
    jdzz: $.getdata("jdzz_shareCode1") || "AUWE5mq3DzWYND2j62XsclQ",
    crazy: $.getdata("crazy_shareCode1") || "4hcydYCP_3SVJFTBkKtsLKt9zd5YaBeE",
    cash: $.getdata("cash_shareCode1") || "eU9YaezhZq8j9mbXz3RF1g",
  },

  // 宝
  {
    zd: $.getdata("zd_shareCode2") || "e7lhibzb3zek2volndkiirtldf2etf3cbfqgk5y",
    nc: $.getdata("nc_shareCode2") || "4625d3914d044bacbae685e9d60f14c8",
    mc: $.getdata("mc_shareCode2") || "MTAxODEyMjkxMDAwMDAwMDQwMDQ5ODU5",
    ddgc: $.getdata("dd_shareCode2") || "T0225KkcRB5L81yFIhOmxv4DcwCjVWnYaS5kRrbA",
    jxgc: $.getdata("jx_shareCode2") || "vuPgt-FKtWwBSRuB_yxNJw==",
    jdzz: $.getdata("jdzz_shareCode2") || "AUWE5m63Cyz1aCmmqj3VDkg",
    crazy: $.getdata("crazy_shareCode2") || "qNOtcKihtPlqVT188Rh9_6t9zd5YaBeE",
    cash: $.getdata("cash_shareCode2") || "eU9YaOzgYPR082eHmXoa0Q",
  },

  // ksy
  {
    zd: $.getdata("zd_shareCode3") || "olmijoxgmjutydzvmwfbl6e6l6h2cth3aj3eb4q",
    nc: $.getdata("nc_shareCode3") || "edf5df477f3e4c45960909255988b345",
    mc: $.getdata("mc_shareCode3") || "MTE1NDAxNzgwMDAwMDAwNDE2NTU0Nzk=",
    ddgc: $.getdata("dd_shareCode3") || "T0225KkcRkxP8gKGIxvzxfBYIACjVWnYaS5kRrbA",
    jxgc: $.getdata("jx_shareCode3") || "t0cC4d00k21nb7mS-skioA==",
    jdzz: $.getdata("jdzz_shareCode3") || "AUWE5mf_GymNZC2H_jHsYwQ",
    crazy: $.getdata("crazy_shareCode3") || "sRQ2jh_ETvfB8zU3_op5Rqt9zd5YaBeE",
    cash: $.getdata("cash_shareCode3") || "eU9Yar7kYap38m_SmnRBgg",
  },
  
  // ksy d
  {
    zd: $.getdata("zd_shareCode4") || "gou7sxm3hztwog43s4wlioc4zwmle4lerqaqbky",
    nc: $.getdata("nc_shareCode4") || "dfb7e6bd0c3649d69d4f61c41a382675",
    mc: $.getdata("mc_shareCode4") || "MTE1NDQ5MzYwMDAwMDAwNDI0MDQ1NzM=",
    ddgc: $.getdata("dd_shareCode4") || "T0205KkcBl5qox6mVkix7J5pCjVWnYaS5kRrbA",
    jxgc: $.getdata("jx_shareCode4") || "7D55VU2CUlCJ3m_4bd2mJg==",
    jdzz: $.getdata("jdzz_shareCode4") || "AUWE52e3jm395fjK9pRUp",
    crazy: $.getdata("crazy_shareCode4") || "2AxO9_8nIcYf8ITfyXlpcg==",
    cash: $.getdata("cash_shareCode4") || "eU9YKqzBMLZXhzyQsxpw",
  }
];

$.result = [];
$.random = Math.ceil(Math.random()*1.5);

!(async () => {
  console.log(`\n此脚本延迟${$.random}秒执行\n`);
  console.log(`🏎️开始执行···自动提交京东类小游戏互助码`);
  console.log(`🧹每月1号、10号、20号 02:00清理一次数据库🧹`);
  console.log(`🚀每月1号、10号、20号【02:01】自动提交🚀`);
  console.log(`目前已提供自动上传以下助力码:\n1. 东东农场✅\n2. 种豆得豆✅\n3. 东东萌宠✅\n4. 东东工厂✅\n5. 京喜工厂✅\n6. 京东赚赚✅\n7. 疯狂JOY✅\n8. 签到领现金✅`);
  for (let i = 0; i < shareCodes.length; i++) {
    const { zd, nc, mc, ddgc, jxgc, jdzz, crazy, cash } = shareCodes[i];
    await $.wait($.random);
    zd &&
      (await create(
        `http://api.turinglabs.net/api/v1/jd/bean/create/${zd}/`,
        "种豆得豆"
      ));
    nc &&
      (await create(
        `http://api.turinglabs.net/api/v1/jd/farm/create/${nc}/`,
        "东东农场"
      ));
    mc &&
      (await create(
        `http://api.turinglabs.net/api/v1/jd/pet/create/${mc}/`,
        "东东萌宠"
      ));
    ddgc &&
      (await create(
        `http://api.turinglabs.net/api/v1/jd/ddfactory/create/${ddgc}/`,
        "东东工厂"
      ));
    jxgc &&
      (await create(
        `http://api.turinglabs.net/api/v1/jd/jxfactory/create/${jxgc}/`,
        "京喜工厂"
      ));
    jdzz &&
        (await create(
          `https://code.chiang.fun/api/v1/jd/jdzz/create/${jdzz}/`,
          "京东赚赚"
        ));
    crazy &&
        (await create(
          `https://code.chiang.fun/api/v1/jd/jdcrazyjoy/create/${crazy}/`,
          "疯狂的JOY"
        ));
    cash &&
        (await create(
          `https://code.chiang.fun/api/v1/jd/jdcash/create/${cash}/`,
          "签到领现金"
        ));
  }
  await showMsg();
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done());

function create(path, name) {
  return new Promise((resolve) => {
    const url = { url: path };
    // log出来当前的互助码
    const urlLength = JSON.stringify(url).length
    $.log(`\n当前提交的【${name}】后10位为：${JSON.stringify(url).substring(urlLength-13,urlLength-3)}`)
    const submitCode = JSON.stringify(url).substring(urlLength-13,urlLength-3)
    $.get(url, async (err, resp, data) => {
      if (err) {
        $.log(JSON.stringify(err));
        resolve(err);
        return;
      }
      try {
        const needAgain = await checkWhetherNeedAgain(resp, create, path, name);
        if (needAgain) return;
        const { message } = JSON.parse(data);
        const { msg } = JSON.parse(data);
        if(`${message}` === 'This bean share code existed'){
          $.log(`❌【种豆得豆】互助码已经在数据库中！\n${data}`)
          const out = `❌互助码${submitCode}已经在数据库中！`
          $.result.push(`${name}： ${out}`)
        }else if(`${message}` === 'This farm share code existed'){
          $.log(`❌【东东农场】互助码已经在数据库中！\n${data}`)
          const out = `❌互助码${submitCode}已经在数据库中！`
          $.result.push(`${name}： ${out}`)
        }else if(`${message}` === 'This pet share code existed'){
          $.log(`❌【东东萌宠】互助码已经在数据库中！\n${data}`)
          const out = `❌互助码${submitCode}已经在数据库中！`
          $.result.push(`${name}： ${out}`)
        }else if(`${message}` === 'This ddfactory share code existed'){
          $.log(`❌【东东工厂】互助码已经在数据库中！\n${data}`)
          const out = `❌互助码${submitCode}已经在数据库中！`
          $.result.push(`${name}： ${out}`)
        }else if(`${message}` === 'This jxfactory share code existed'){
          $.log(`❌【京喜工厂】互助码已经在数据库中！\n${data}`)
          const out = `❌互助码${submitCode}已经在数据库中！`
          $.result.push(`${name}： ${out}`)
        }else if(`${message}` === 'code error'){
          $.log(`⚠️互助码错误！⚠️\n${data}`)
          const out = '⚠️互助码错误！⚠️'
          $.result.push(`${name}： ${out}`);
        }else if(`${message}` === 'success'){
          $.log(`✅互助码提交成功！\n${data}`)
          const out = '✅互助码提交成功'
          $.result.push(`${name}： ${out}`)
        }else if(`${msg}` === "Code Is Exists, Please Don't add it again"){
          $.log(`❌【京东赚赚/疯狂的JOY/签到领现金】互助码已经在数据库中！\n${data}\n\n---------------------------------------`)
          const out = `❌互助码${submitCode}已经在数据库中！\n---------------------------------------`
          $.result.push(`${name}： ${out}`);
        }else if(`${msg}` === 'Add Success'){
          $.log(`✅互助码提交成功！\n${data}\n\n---------------------------------------`)
          const out = `✅互助码提交成功\n---------------------------------------`
          $.result.push(`${name}： ${out}`)
        }else if(`${msg}` === 'You Are Too Frequently Request For This Project ,Please Request Again After 3600 Second .'){
          $.log(`⚠️请求频繁，10分钟后重试⚠️\n${data}\n\n---------------------------------------`)
          const out = `⚠️请求频繁，10分钟后重试⚠️\n---------------------------------------`
          $.result.push(`${name}： ${out}`)
        } else {
          $.log(`🚫服务器异常！🚫\n${data}`)
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

function checkWhetherNeedAgain(resp, fun, url, name) {
  return new Promise(async (resolve) => {
    if ((resp && resp.statusCode !== 200) || !resp.body) {
      await $.wait($.random);
      await fun(url, name);
      resolve(true);
    } else {
      resolve(false);
    }
  });
}

function showMsg() {
  return new Promise((resolve) => {
    $.msg($.name, "", $.result.join("\n"));
    resolve();
  });
}

// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
