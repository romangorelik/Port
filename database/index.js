var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://roman:roman1@ds211708.mlab.com:11708/portfolio', function(err){
  if(err) console.log(err);
  console.log("connection successful");
});

module.exports = db;