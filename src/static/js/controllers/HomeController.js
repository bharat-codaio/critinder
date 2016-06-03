(function(){
    'use strict';

    angular
        .module('critinderApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$rootScope', '$scope', '$log', 'ServerService'];

    function HomeController($rootScope, $scope, $log, ServerService)
    {
        $log.info("Welcome Home!");


        /*
         Object to be sent to server through post request
         */
        var data = {
            profileId: '57517355790ecdeb421bca73',
            content: '6 4" Swiss Canadian, UCLA <BR>. Looking for someone to '
        };
        data.content+='bring home to see my mom. ';

        ServerService.sendPost(data,
          CREATE_PROFILE_ROUTES.ADD_BIO,
          CREATE_PROFILE_ROUTES.ADD_BIO_SUCCESS,
          CREATE_PROFILE_ROUTES.ADD_BIO_FAIL
        );

        ///*
        //Sample Post Request To Server
        // */
        //ServerService.sendPost(data,
        //  CREATE_PROFILE_ROUTES.CREATE_PROFILE,
        //  CREATE_PROFILE_ROUTES.CREATE_PROFILE_SUCCESS,
        //  CREATE_PROFILE_ROUTES.CREATE_PROFILE_FAIL
        //);

        /*
        Watchers for the request made to server above
         */
        $rootScope.$on(CREATE_PROFILE_ROUTES.ADD_BIO_SUCCESS, function(msg, data){
            console.log("Success getting test Route! Object received: " + JSON.stringify(data));
        });

        $rootScope.$on(CREATE_PROFILE_ROUTES.ADD_BIO_FAIL, function(msg, data){
            console.log("Failed While getting test Route :( Object received: " + JSON.stringify(data));
        });
    };
})();