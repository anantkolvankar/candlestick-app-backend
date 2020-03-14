const http = require('http');
const app = require('./src/app');

var server = app.listen(8080, function () {
   var port = server.address().port
   console.log("Candlestick api listening at http://localhost:%s", port)
})
