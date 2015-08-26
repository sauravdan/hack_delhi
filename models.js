exports = module.exports = function(app, mongoose){
  require('./schema/org/org')(app, mongoose);
  require('./schema/rev/rev')(app, mongoose);

  GLOBAL.Orgs = app.db.model('Org');
  GLOBAL.Revs = app.db.model('Rev');
};
