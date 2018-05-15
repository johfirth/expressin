const path = require('path');
var friendName = require("../app/data/friendName.js")



module.exports = function(app) {
  app.get('/api/friends', function(req, res){
    res.json(friendName);

  });

  app.post('api/friends', function (req, res){
    friendName.push(req.body);
    res.json(true)
  })
}
