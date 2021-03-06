const express = require("express");
const router = express.Router();
const passport = require("passport");
const controller = require("../controllers/usersController");

router.post("/signup", controller.signup);

router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  controller.signin
);

module.exports = router;