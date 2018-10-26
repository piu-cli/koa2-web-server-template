/*
 * @Author: luoquanquan
 * @Date: 2018-10-26 16:23:02
 * @Last Modified by: luoquanquan
 * @Last Modified time: 2018-10-26 17:16:59
 */
const mongoose = require('mongoose')
const config = require('../config')
mongoose.connect('mongodb://localhost:27017/myapp', {
  server: { poolSize: 20 }
}, function (err) {
  if (err) {
    console.log('connect to %s error: ', config.db, err.message)
    process.exit(1)
  }
})

// import models
require('./demo')

// wrapper && export models
exports.Demo = mongoose.model('Demo')
