// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

const cloud = require('wx-server-sdk');

// 初始化 cloud
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV,
});

const db = cloud.database();

exports.main = async (event, context) => {
  console.log(event);
  console.log(context);
  let { OPENID, APPID, UNIONID } = cloud.getWXContext();
  let result = '';

  await db
    .collection('join')
    .where({
      actID: event.id,
      openid: OPENID,
    })
    .get()
    .then((res) => {
      console.log('查重结果：', res);
      if (res.data.length > 0) {
        result = '报名重复';
      } else {
        db.collection('join').add({
          data: {
            actID: event.id,
            userinfo: event.userInfo,
            name: event.name,
            sex: event.sex,
            phone: event.phone,
            idcard: event.idcard,
            height: event.height,
            weight:event.weight,
            size: event.size,
            openid: OPENID,
          }
        }).then(res => {
          result = '恭喜报名成功～';
        })
      }
    });
  // 可执行其他自定义逻辑
  // console.log 的内容可以在云开发云函数调用日志查看

  return result;
};
