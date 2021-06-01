var express = require('express');
var fs = require('fs');
var http = require('http');
var app = express();
app.use(express.static('./dy'));
app.use(function (req, res,next) {
  res.sendFile('./dy/index.html');  //路径根据自己文件配置
});
var httpsServer = http.createServer(app);
httpsServer.listen(8888, function () {
  var host = '127.0.0.1';
  var port = httpsServer.address().port;
  console.log('app listening at http://%s:%s', host, port);
});
