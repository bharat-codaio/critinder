/**
 * Created by bharatbatra on 6/2/16.
 */
(function() {
    'use strict';

    angular
        .module('critinderApp')
        .factory('ServerService', ServerService);

    ServerService.$inject = ['$http', '$rootScope'];

    function ServerService($http, $rootScope) {
        var self = this;
        self.sendPost = sendPost;

        function sendPost(param, url, successMessage, failureMessage ) {

            $http.post(SERVER_ADDRESS + url , param)
                .success(function (data) {
                    $rootScope.$broadcast(successMessage, data);
                })
                .error(function (data) {
                    $rootScope.$broadcast(failureMessage, data)
                });

        }

        return self;
    }
})();
