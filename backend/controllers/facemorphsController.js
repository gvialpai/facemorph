var Facemorph = require("../models/facemorph")



function facemorphsIndex(req, res) {
  Facemorph.find({}, function(err, facemorphs) {
    if (err) return res.status(404).json(err);

    res.status(200).json({ facemorphs: facemorphs });
  });
}

module.exports = {
  facemorphsIndex: facemorphsIndex
}