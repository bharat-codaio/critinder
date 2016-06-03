var critinderApp = angular.module('critinderApp', ['ngRoute', 'ngMaterial', 'ngAnimate']);

critinderApp.config(function($routeProvider) {
  $routeProvider
  // home.html route
  .when('/', {
    templateUrl : '/static/templates/home.html',
    controller  : 'HomeController'
  })
  .when('/home', {
    templateUrl : '/static/templates/home.html',
    controller  : 'HomeController'
  })
  .when('/giveCritique', {
    templateUrl : '/static/templates/give.html',
    controller  : 'CritiqueProviderController'
  })
  .when('/getCritique', {
    templateUrl : '/static/templates/get.html',
    controller  : 'CritiqueSeekerController'
  })
  .when('/about', {
    templateUrl : '/static/templates/about.html',
    controller  : 'AboutController'
  })
});

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

