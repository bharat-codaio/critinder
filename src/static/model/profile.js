/**
 * Created by bharatbatra on 6/3/16.
 */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProfileSchema = new Schema({
  userId: String,
  pictures: Array,
  bios: Array,
  context: String
});

module.exports = mongoose.model('Profile', ProfileSchema);