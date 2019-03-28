var mongoose = require('mongoose');
var url = 'mongodb://localhost/Ublackcard'
mongoose.connect(url,{useMongoClient:true});
module.exports = mongoose;
