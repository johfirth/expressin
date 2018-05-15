
var friendName = require("../app/data/friendName.js")



module.exports = function(app) {
  app.get('api/friendName', function(req, res){
    res.json(friendName);

  });

  app.post('api/friendName', function (req, res){
    
  })
}
