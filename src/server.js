/**
 * Created by bharatbatra on 6/2/16.
 */
'use strict';
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = process.env.PORT||4040;
//var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/critinder');

/*
Auth0 passport
 */
var passport = require('passport');

// This is the file we created in step 2.
// This will configure Passport to use Auth0
var strategy = require('./setup-passport');

// Session and cookies middlewares to keep user logged in
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.use(cookieParser());

// See express session docs for information on the options: https://github.com/expressjs/session
app.use(session({ secret: 'YOUR_SECRET_HERE', resave: false,  saveUninitialized: false }));

app.use(passport.initialize());
app.use(passport.session());

// Auth0 callback handler
app.get('/loginCallback',
  passport.authenticate('auth0', { failureRedirect: '/url-if-something-fails' }),
  function(req, res) {
    if (!req.user) {
      throw new Error('user null');
    }
    console.log('At auth0 callback handler')
    console.log(req.user.id);
    res.cookie('userId', req.user.id);
    res.redirect("/#/test");
  });

module.exports = function(req,res,next){
  if(!req.isAuthenticated()){
    console.log("Not Authenticated : " + req)
    return res.redirect('/');
  }
  console.log("User Authenticated");
  next();
}

app.get('/#/test',
  function(req,res){
    console.log("got user req" + req.user.id);
  res.render('/#/test', {
    userId : req.user.id
  });
});
/*
router middlewear: should be accessed everytime router is used
 */
//router.use(function(req, res, next){
//   console.log('MiddleWear For Test');
//    next();//make sure to go to next route
//});
//app.use('/api', router);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, '/static')));
app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));
app.set('views', __dirname + '/static/templates');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, function()  {
    console.log('listening on port ' + port);
});


/*
Mongo Crud Stuff
 */
var Test = require('./static/model/testModel');
var Bio = require('./static/model/bio');
var Picture = require('./static/model/picture');
var User = require('./static/model/user');
var Profile = require('./static/model/profile');

/*
 Post Request EndPoints
 */

app.post('/newUser', function(req, res)
{
  var user = new User();
  user.authId = req.body.userId;
  user.name = req.body.name;
  user.email = req.body.email;

  user.save(function(err){
    if(err)
      res.send(err);
    res.send(user);
  });

});

app.post('/newProfile', function(req, res){
  var profile = new Profile();
  profile.userId = req.body.userId;
  profile.pictures = [];
  profile.bios = [];
  profile.context = req.body.context;

  profile.save(function(err){
    if(err)
      res.send(err);
    res.send(Profile);
  });
});

app.post('/addPic', function(req, res){
  var picture = new Picture();
  picture.url = req.body.url;
  picture.profileId = req.body.profileId;
  picture.keepNum = 0;
  picture.discardNum = 0;
  picture.firstNum = 0;
  picture.smileNum = 0;
  picture.clearFaceNum = 0;
  picture.hatGlassNum= 0;
  picture.mirrorSelfieNum= 0;
  picture.badBLNum = 0;
  picture.strenuousNum = 0;
  picture.childNum = 0;
  picture.groupNum = 0;
  picture.blurryNum = 0;
  picture.highQNum = 0;
  picture.convoPointNum = 0;
  picture.canSeeWithMeNum = 0;
  picture.other = [];

  picture.save(function(err){
    if(err)
      res.send(err);
    res.send(picture);
  });
});

app.post('/addBio', function(req, res){
 var bio = new Bio();
  bio.content = req.body.content;
  bio.profileId = req.body.profileId;
  bio.conciseNum = 0;
  bio.intendedFunnyNum = 0;
  bio.actuallyFunnyNum = 0;
  bio.tooMuchInfoNum = 0;
  bio.spellingErrorNum = 0;
  bio.overusedNum = 0;
  bio.lifeInfoNum = 0;
  bio.conversationStarterNum= 0;
  bio.other = [];

  bio.save(function(err){
    if(err)
      res.send(err);
    res.send();
  });
});


app.post('/api/test', function(req, res){
  var test = new Test();
  test.name = req.body.name;

  console.log(test);

  test.save(function(err){
    if(err)
      res.send(err);

    res.send(test);
  });
});