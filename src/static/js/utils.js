/**
 * Created by bharatbatra on 6/3/16.
 */
var SERVER_ADDRESS = 'http://localhost:4040';

var TEST_ROUTES = {
  TEST_API : '/api/test',
  TEST_API_SUCCESS : 'test_success',
  TEST_API_FAIL : 'test_failure'
};

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