var ObjectId = require('mongoose').Types.ObjectId;


module.exports = function(app){
  "use strict";
  //app.get('/api/org/:orgid/reviews', fetchRevs);
  app.post('/api/org/reviews', createRev);
  var revUtils = require('./utils/revUtils.js')(app);

  /*function fetchRevs(req, res){
    req.checkParams('orgid', 'Not a valid object id').isObjectId();
    var query = { organization : orgid };
    Rev.find(query, function(err, user){
      if(err){
        return res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({msg:'Failed'});
      }
      return res.status(HTTPStatus.)
    });
  }*/

  function createRev(req, res){
    console.log("Hi!");
    console.log(req);
    //req.checkParams('orgid', 'Not a valid object id');
    //var query = { organization: req.orgid };
    revUtils.createSingleRev(req.body.name, req.body.comment, req.body.rate, req.body.device, function(err){
      if(err){
        return res.json({"Error": err});
      }
      return res.json({"Hello":"done"});
    });
  }
  return {
    createRev : createRev
  };
};
