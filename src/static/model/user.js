/**
 * Created by bharatbatra on 6/3/16.
 */

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  email: String,
  authId: String
});

module.exports = mongoose.model('User', UserSchema);