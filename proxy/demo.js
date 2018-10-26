/*
 * @Author: luoquanquan
 * @Date: 2018-10-26 17:10:43
 * @Last Modified by: luoquanquan
 * @Last Modified time: 2018-10-26 17:23:13
 */
const Demo = require('../models').Demo

exports.getDemoById = id => Demo.findById(id)
