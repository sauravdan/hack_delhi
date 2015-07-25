exports = module.exports = function(app, mongoose){
  var revSchema = new mongoose.Schema({
    comment : String,
    keywords :[String],
    organization: {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'Organization'
    },
    creationTime : {
      type : Date,
      'default' : Date.now
    },
    stats : {
      stars : {
        type: Number,
        'default': 0
      }
    } 
  });
  app.db.model('Rev', revSchema);
}
