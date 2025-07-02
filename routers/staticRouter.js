const express = require('express');
const router = express.Router();
const{renderLoginPage,renderHomePage,renderSignupPage,renderAboutPage} = require("../controllers/staticController")
// GET 
router.get("/", renderHomePage);
router.get("/about-us", renderAboutPage);
router.get("/login", renderLoginPage);
router.get("/signup", renderSignupPage);


// POST


module.exports = router;