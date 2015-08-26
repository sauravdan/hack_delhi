exports = module.exports = function(app, mongoose){
  var revSchema = new mongoose.Schema({
    name : String,
    device : String,
    comment : String,
    keywords :[String],
    organization: {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'Org'
    },
    creationTime : {
      type : Date,
      'default' : Date.now
    },
    stars : {
      type: Number,
      'default' :0
    }
  });
  app.db.model('Rev', revSchema);
}
