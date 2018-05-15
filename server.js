const express = require('express');
const bodyParser = require('body-parser');

var app = express();

const PORT = process.env.PORT || 8443;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(app.use(bodyParser.json()));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, function(){
  console.log('App listening on PORT: ' + PORT)
});

