var express = require('express'),
    http = require('http'),
    routemappings = require('./routemappings'),
    bodyParser = require('body-parser');
    cookieParser = require('cookie-parser'),
    mongoose = require('mongoose'),
    methodOverride = require('method-override'),
    multer = require('multer');

HTTPStatus = require('http-status')

/* App Starts here */
var app = express();
console.log(__dirname);
global.__base = __dirname + '/';
app.set('port', 8080);
app.db = mongoose.createConnection('mongodb://localhost:27017/hack_delhi');
app.db.on('error', console.error.bind(console, 'mongoose connection error'));
app.db.once('open', function(){
  console.log('mongoose open for business');
});

// enable multer
app.use(
    multer({
      dest: __base + 'static/uploads/' ,
      includeEmptyFields: true,
      onError: function(error, next){
        console.log("Error: " + error);
      }
    })
);

//app.use(bodyParser.json({type: 'application/json'}));
app.use(methodOverride());
require('./models')(app, mongoose);
routemappings(app);
/*http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port', app.get('port'));
});*/
app.listen(app.get('port'), function(){
  console.log('');
});
app.get('/ping', function(request, response){
  //console.log(request.body);
  return response.json({'hello':'world'});
});
app.post('/ping', function(req, res){
  console.log(req.body);
  return res.json({"post":"successful"});
});
module.exports = app
