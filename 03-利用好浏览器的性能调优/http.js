var express = require("express");
var app = express();
var compression = require('compression')
app.use(compression())
// 运行静态服务器
app.use(express.static(__dirname));
app.listen(8081);