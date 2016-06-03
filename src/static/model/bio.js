/**
 * Created by bharatbatra on 6/3/16.
 */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BioSchema = new Schema({
  profileId: String,
  content: String,
  conciseNum: Number,
  intendedFunnyNum: Number,
  actuallyFunnyNum: Number,
  tooMuchInfoNum: Number,
  spellingErrorNum: Number,
  overusedNum: Number,
  lifeInfoNum: Number,
  conversationStarterNum: Number,
  other: Array
});

module.exports = mongoose.model('Bio', BioSchema);
