/*
 * @Author: luoquanquan
 * @Date: 2018-10-26 15:57:56
 * @Last Modified by: 罗圈圈
 * @Last Modified time: 2018-10-26 23:36:33
 */

const router = require('koa-router')()
const demo = require('./demo')

router.prefix('/api')

router.use('/demo', demo.routes(), demo.allowedMethods() )

module.exports = router
