/**
 * Created by bharatbatra on 6/3/16.
 */
/**
 * Created by bharatbatra on 6/3/16.
 */
(function(){
    'use strict';

    angular
        .module('critinderApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$rootScope', '$scope', '$log', 'ServerService'];

    function HomeController($rootScope, $scope, $log, ServerService) {
        $log.info("Welcome Home!");

        /*
        Object to be sent to server through post request
         */
        var data = {
            name: 'james'
        }

        /*
        Sample Post Request To Server
         */
        ServerService.sendPost(data,
          TEST_ROUTES.TEST_API,
          TEST_ROUTES.TEST_API_SUCCESS,
          TEST_ROUTES.TEST_API_SUCCESS);

        /*
        Watchers for the request made to server above
         */
        $rootScope.$on(TEST_ROUTES.TEST_API_SUCCESS, function(msg, data){
            console.log("Success getting test Route! Object received: " + JSON.stringify(data));
        });

        $rootScope.$on(TEST_ROUTES.TEST_API_FAIL, function(msg, data){
            console.log("Failed While getting test Route :( Object received: " + JSON.stringify(data));
        });
    };
})();