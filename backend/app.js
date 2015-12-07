var express           = require("express");
var morgan            = require("morgan");
var bodyParser        = require("body-parser");
var path              = require("path");
var methodOverride    = require("method-override");
var mongoose          = require("mongoose")
var cors              = require("cors");

var app               = express();

var databaseURL = 'mongodb://localhost:27017/facemorph';
mongoose.connect(databaseURL);

var routes = require("./config/routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());


app.use(routes);

app.listen(3000);
console.log("listening....");