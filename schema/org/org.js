exports = module.exports = function(app, mongoose){
  var organizationSchema = new mongoose.Schema({
    name : {
      type : String,
      required : true
    },
    org_type : {
      type : String
    },
    rev : [{
      type : mongoose.Schema.Types.ObjectId,
      ref : 'Rev'
    }],
    stats : {
      rating : {
        type : Number,
        'default' : 0
      }
    }
  });
  app.db.model('Org', organizationSchema);
}
