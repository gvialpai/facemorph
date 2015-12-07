var express = require('express'),
    router  = express.Router();

var facemorphsController = require("../controllers/facemorphsController");

router.route("/facemorphs")
  .get(facemorphsController.facemorphsIndex)

module.exports = router;