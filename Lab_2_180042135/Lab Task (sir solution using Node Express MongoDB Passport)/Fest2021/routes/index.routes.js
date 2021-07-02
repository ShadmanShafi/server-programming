const express = require('express');
const router = express.Router();
const ensureAuthenticated = require('./../middlewares/auth.middleware');

router.get("/",(req, res)=>{
    //res.send("<H1>Welcome!</H1>");
    res.render("welcome.ejs");
});

router.get("/dashboard", ensureAuthenticated, (req, res) => {
    res.render("dashboard.ejs", { user: req.user });
  });

module.exports = router; 