var express = require('express');
var app = express();


var server = app.listen(8081, function () {
  console.log("Server Create");
  const host = server.address().address
  const port = server.address().port;
  console.log("API Listening at http://%s:%s", host, port);

});
