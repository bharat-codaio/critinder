var critinderApp = angular.module('critinderApp', ['ngRoute', 'ngMaterial', 'ngAnimate', 'ngFileUpload']);

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