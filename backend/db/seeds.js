var mongoose = require("mongoose");

var databaseURL = 'mongodb://localhost:27017/facemorph';
mongoose.connect(databaseURL);

var Facemorph = require("../models/facemorph"); 

var facemorph1 = new Facemorph({
      "name": "guus",
      "url": "http://img.morphthing.com/i/90558577/2/0/ebd4178a/guus-jpg--hassan-jpg.jpeg"
      }
)

facemorph1.save(function(err, facemorph) {
 if (err) return console.log(err);
 console.log("Facemorph saved! ", facemorph);
})

var facemorph2 = new Facemorph({
      "name": "ben",
      "url": "http://img.morphthing.com/i/90558740/2/0/0e2398ec/ben-jpg--hassan-jpg.jpeg"
      }
)

facemorph2.save(function(err, facemorph) {
 if (err) return console.log(err);
 console.log("Facemorph saved! ", facemorph);
})

var facemorph3 = new Facemorph({
      "name": "marika",
      "url": "http://img.morphthing.com/i/90558857/2/0/596defc9/marika-jpg--hassan-jpg.jpeg "
      }
)

facemorph3.save(function(err, facemorph) {
 if (err) return console.log(err);
 console.log("Facemorph saved! ", facemorph);
})