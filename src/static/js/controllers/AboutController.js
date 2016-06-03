/**
 * Created by bharatbatra on 6/3/16.
 */
(function(){
    'use strict';

    angular
        .module('critinderApp')
        .controller('AboutController', AboutController);

    AboutController.$inject = ['$rootScope', '$scope', '$log'];

    function AboutController($rootScope, $scope, $log) {
        $log.info("Everything About Nothing");
    }
})();