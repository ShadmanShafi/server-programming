const express = require('express');
const router = express.Router();

router.get("/",(req, res)=>{
    //res.send("<H1>Welcome!</H1>");
    res.render("users/register.ejs");
});

module.exports = router; 