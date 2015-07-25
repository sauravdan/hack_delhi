var express = require('express'),
    http = require('http'),
    mongoose = require('mongoose');
/* App Starts here */
var app = express();
app.set('port', 8080);
app.db = mongoose.createConnection('mongodb://localhost:27017/hack_delhi');
app.db.on('error', console.error.bind(console, 'mongoose connection error'));
app.db.once('open', function(){
  console.log('mongoose open for business');
});
require('./models')(app, mongoose);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port', app.get('port'));
});
app.get('/ping', function(req, res){
  return res.json({'hello':'world'});
});
module.exports = app
