exports = module.exports = function(app, mongoose){
  var organizationSchema = new mongoose.Schema({
    name : {
      type : String,
      required : true
    },
    org_type : {
      type : String
    },
    stats : {
      rating : {
        type : Number,
        'default' : 0
      }
    }
  });
  app.db.model('Org', organizationSchema);
}
