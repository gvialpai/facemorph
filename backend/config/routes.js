var express = require('express'),
    router  = express.Router();

var facemorphsController = require("../controllers/facemorphsController");

router.route("/facemorphs")
  .get(facemorphsController.facemorphsIndex)
  .post(facemorphsController.facemorphsCreate)

router.route("/facemorphs/:name")
  .get(facemorphsController.facemorphsShow)
  // .delete(facemorphsController.facemorphsDelete)

module.exports = router;