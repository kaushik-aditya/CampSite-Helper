var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var Campground = require("./models/campground.js");
var Comment    = require("./models/comment.js");
var methodOverride = require('method-override');
var flash          = require("connect-flash");

//config
var connectDB = require("./config/db.js");
var config = require("./config/config.js");
var passport = require('./config/passportConfig'); // Import Passport configuration


//IMPORTING ROUTES============================================
var commentRoutes   = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes       = require("./routes/index");

//==================================================


connectDB();

app.use(bodyParser.urlencoded({extended: true}));// For retrieving data from Form Tag 
app.use(express.static('public'));   //for using public directory, static files like image, css, js files
app.use(methodOverride("_method"));
app.use(flash());

//PASSPORT CONFIGURATION==========================
app.use(require("express-session")({
    secret: "Aditya Kaushik",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
//==================================================


app.set("view engine", "ejs");     //for using views directory, files like html

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

// USING IMPORTED  ROUTES====================
app.use(indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);
//=================================

const PORT = config.development.server.port;

app.listen(PORT, function(req, res){
    console.log("Yelp Camp is Started");
});


//  When we register the same with same username and pass, it will redirect to same page and Say user already exist according to passport local mongoose