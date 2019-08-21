let mongoose = require('mongoose');
let db = require('./index.js');

let bigO = mongoose.Schema({
  date: { type: Date, default: Date.now },
  title: { type: String, required: true },
  text: { type: String, required: true }
})

let BigO = mongoose.model('BigO', bigO)

module.exports = {'BigO': BigO}