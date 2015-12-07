var Facemorph = require("../models/facemorph")



function facemorphsIndex(req, res) {
  Facemorph.find({}, function(err, facemorphs) {
    if (err) return res.status(404).json({ message: "something went wrong" });

    res.status(200).json({ facemorphs: facemorphs });
  });
}

function facemorphsCreate(req, res) {
  var facemorph = new Facemorph(req.body.facemorph);
  facemorph.save(function(err) {
    if (err) return res.status(500).json({ message: "something went wrong" });

    res.status(201).json({ facemorph: facemorph });
  });
}

function facemorphsShow(req,res){
  var name = req.params.name
  Facemorph.findOne({ name: name})
}

module.exports = {
  facemorphsIndex: facemorphsIndex,
  facemorphsCreate: facemorphsCreate
}

// .get(facemorphsController.facemorphsShow)
// .delete(facemorphsController.facemorphsDelete)