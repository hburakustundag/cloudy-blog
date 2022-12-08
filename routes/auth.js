const router = require("express").Router();
const passport = require("passport");
require("dotenv").config({ path: "../config/.env" });

router.get(
  "/",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/blogs");
  }
);

module.exports = router;
