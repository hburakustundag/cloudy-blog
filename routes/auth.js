const router = require("express").Router();
const passport = require("passport");
require("dotenv").config({ path: "../config/.env" });

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/blogs");
  }
);

router.get(
  "/facebook",
  passport.authenticate("facebook", {
    scope: ["email"],
  })
);

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/blogs");
  }
);

module.exports = router;
