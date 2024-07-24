// config/passportConfig.js
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user'); // Adjust path as needed

// Passport configuration
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = passport;