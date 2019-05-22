// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init();
const db = cloud.database();

exports.main = async (event, context) => {
 var result = await db.collection('user').orderBy('saveTime', 'desc').limit(100).get();
  var arr = result.data;
  return arr;
}
