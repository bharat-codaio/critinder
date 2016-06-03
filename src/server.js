/**
 * Created by bharatbatra on 6/2/16.
 */
'use strict'
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/static', express.static(path.join(__dirname, '/static')));
app.set('views', __dirname + '/static/templates');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(8000, function() {
    console.log('listening on port 8000');
});
