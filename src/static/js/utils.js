/**
 * Created by bharatbatra on 6/3/16.
 */
var SERVER_ADDRESS = 'http://localhost:4040';

var TEST_ROUTES = {
  TEST_API : '/api/test',
  TEST_API_SUCCESS : 'test_success',
  TEST_API_FAIL : 'test_failure'
};

var CREATE_PROFILE_ROUTES = {
  ADD_BIO : '/addBio',
  ADD_BIO_SUCCESS : 'addBioSuccess',
  ADD_BIO_FAIL : 'addBioFail',

  ADD_PIC : '/addPic',
  ADD_PIC_SUCCESS : 'addPicSuccess',
  ADD_PIC_FAIL : 'addPicFail',

  ADD_USER : '/newUser',
  ADD_USER_SUCCESS : 'newUserSuccess',
  ADD_USER_FAIL : 'newUserFail',

  CREATE_PROFILE : '/newProfile',
  CREATE_PROFILE_SUCCESS : 'newProfileSuccess',
  CREATE_PROFILE_FAIL : 'newProfileFail'
};



/*
Auth0 util function
*/

 var lock = new Auth0Lock('dj8HcYuDuVox77kgWQfDeGTKUzMEgCem', 'bbatra.auth0.com');

 function signin() {
 lock.show({
 callbackURL: SERVER_ADDRESS+'/loginCallback',
   responseType: 'code',
   authParams: {
 scope: 'openid email'  // Learn about scopes: https://auth0.com/docs/scopes
 }
 });
 }


/*
Utility Code: In production this can be moved to an intitial.js script
*/
$(document).ready(function() {

  $('textarea#bio1, textarea#bio2, textarea#bio3').characterCounter();

  $(function() {
    $('.file-well input').on('change', function(e) {
      console.log('change!');
      $(e.target).parent().removeClass('hover');
      $(e.target).parent().addClass('filled');
    });
    $('.file-well input').on('dragover', function(e) {
      console.log('dragover');
      $(e.target).parent().addClass('hover');
    });
    $('.file-well input').on('dragleave', function(e) {
      console.log('dragleave');
      $(e.target).parent().removeClass('hover');
    });
  });

});