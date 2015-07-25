exports = module.exports = function(app, mongoose){
  require('./schema/org/org')(app, mongoose);
  require('./schema/rev/rev')(app, mongoose);

  GLOBAL.Org = app.db.model('Org');
  GLOBAL.Rev = app.db.model('Rev');
};
