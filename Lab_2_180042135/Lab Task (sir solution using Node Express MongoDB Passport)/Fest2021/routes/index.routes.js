const express = require('express');
const router = express.Router();

router.get("/",(req, res)=>{
    //res.send("<H1>Welcome!</H1>");
    res.render("welcome.ejs");
});

router.get("/dashboard", (req, res) => {
    res.render("dashboard.ejs");
  });

module.exports = router; 