const express = require("express");
const passport = require("passport");
const controller = require("../controllers/thingsController");

const router = express.Router();




router.post("/", controller.createThing);

router.get("/garbages", controller.fetchGarbage);

router.get("/treasures",passport.authenticate("jwt", { session: false }),controller.fetchTreasure);


module.exports = router;