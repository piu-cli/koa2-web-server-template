const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DemoSchema = new Schema({
  name: {
    type: String
  }
})

mongoose.model('Demo', DemoSchema)
