/*
 * @Author: luoquanquan
 * @Date: 2018-10-26 16:09:22
 * @Last Modified by: luoquanquan
 * @Last Modified time: 2018-10-26 16:10:50
 */
const router = require('koa-router')()
const demo = require('../../controllers/demo')

router.get('/get', demo.get)

module.export = router
