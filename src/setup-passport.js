/**
 * Created by bharatbatra on 6/3/16.
 */
var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

var strategy = new Auth0Strategy({
  domain:       'bbatra.auth0.com',
  clientID:     'dj8HcYuDuVox77kgWQfDeGTKUzMEgCem',
  clientSecret: 'L5xT4-8pMmzIaR6jgZ8PIb7_9skxZIsEa7tme9ULVmOV81qEGsQIpaUAF-K5YlOg',
  callbackURL:  '/callback'
}, function(accessToken, refreshToken, extraParams, profile, done) {
  // accessToken is the token to call Auth0 API (not needed in the most cases)
  // extraParams.id_token has the JSON Web Token
  // profile has all the information from the user
  return done(null, profile);
});

passport.use(strategy);

// This is not a best practice, but we want to keep things simple for now
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = strategy;