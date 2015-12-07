var http        = require("http");
var fs          = require('fs');
var express     = require('express');
var app         = express();
app.set('port', process.env.PORT || 3000);

app.set('views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {

  res.render('home')

});
app.get("/:name", function(req, res) {

  var name = req.params.name;
  console.log(name)

  fs.readFile('./public/'+ name + '.jpeg', function(err, data) {
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    res.end(data)
  })
})

app.listen(process.env.PORT || 3000 )