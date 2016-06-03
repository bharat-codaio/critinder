/**
 * Created by bharatbatra on 6/2/16.
 */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TestSchema = new Schema({
    name: String
});

module.exports = mongoose.model('NewTest', TestSchema);