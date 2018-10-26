const Demo = require('../proxy').Demo

exports.decodeUserInfo = async (ctx, next) => {
  const data = await Demo.findDemoById(212)
  ctx.body = data
}
