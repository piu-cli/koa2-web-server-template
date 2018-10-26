/*
 * @Author: luoquanquan
 * @Date: 2018-10-26 15:57:56
 * @Last Modified by: luoquanquan
 * @Last Modified time: 2018-10-26 16:06:51
 */

const router = require('koa-router')()
const demo = require('./demo')

router.prefix('/api')

router.use('/demo', demo.routes(), demo.allowedMethods())

module.export = router
