var express = require('express')
var bodyParser = require('body-parser')
var route = require('./routes/routes')
var app = express()
// app.use(express.favicon())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header("Content-Type", "application/json;charset=utf-8");
    if (req.method == 'OPTIONS') {res.send(200)}
    else {next()}
});

route(app)
app.listen(3000)