var http = require("http");
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.json({code:200,message:"It's working"})
});
module.exports = app;
