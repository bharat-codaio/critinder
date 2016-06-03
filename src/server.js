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

app.listen(port, function() {
    console.log('listening on port ' + port);
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

/*
Mongo Crud Stuff
 */
var Test = require('./static/model/testModel');