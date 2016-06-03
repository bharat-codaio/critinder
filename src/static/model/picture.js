/**
 * Created by bharatbatra on 6/3/16.
 */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PictureSchema = new Schema({
  profileId: String,
  url:String,
  keepNum: Number,
  discardNum: Number,
  firstNum: Number,
  smileNum: Number,
  clearFaceNum: Number,
  hatGlassNum: Number,
  mirrorSelfieNum: Number,
  badBLNum: Number,
  strenuousNum: Number,
  childNum: Number,
  groupNum: Number,
  blurryNum: Number,
  highQNum: Number,
  convoPointNum: Number,
  canSeeWithMeNum: Number,
  other: Array
});

module.exports = mongoose.model('Picture', PictureSchema);