// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database();

exports.main = async (event, context) => {

  console.log(event)
  console.log(context)
  let result = [];
  await db.collection('activities')
    .where({
    })
    .get().then(res => {result = res.data})
  // 可执行其他自定义逻辑
  // console.log 的内容可以在云开发云函数调用日志查看

  return result;
}

