module.exports = function(app){
  "use strict";

  function createSingleRev(name, comment, rate, device, callback){
    var rev = new Revs({
      comment : comment,
      stars : rate,
      name : name,
      device : device
    });
    rev.save();
    return callback();
  }

  /*function fetchRev(orgId, callback){
    Revs.find({organization : orgId}, function
        )*/
  return {
    createSingleRev : createSingleRev
  }
}
