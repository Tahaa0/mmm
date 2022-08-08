require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var serv = require('http').Server(app);
var url = require('url');
var EventEmitter = require('events').EventEmitter;
var EventController = new EventEmitter();


var http = require("http");

var io = require('socket.io')(serv,{});
const connUri = process.env.MONGO_LOCAL_CONN_URL;
console.log(connUri);
var session = require("express-session")({
    secret: "GOL_825020918201",
    resave: true,
    saveUninitialized: true
});
var sharedsession = require("express-socket.io-session");

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
	res.render('index.ejs');
});

app.use('/public',express.static(__dirname + '/public'));
app.use('/',express.static(__dirname + '/views'));
app.use(session);

io.use(sharedsession(session),{
    autoSave:true,
});

serv.listen(process.env.PORT || 2000);
console.log("Server started.");
