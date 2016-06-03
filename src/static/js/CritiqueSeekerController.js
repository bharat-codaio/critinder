/**
 * Created by bharatbatra on 6/2/16.
 */
(function(){

    'use strict';

    angular
        .module('critinderApp')
        .controller('CritiqueSeekerController', CritiqueSeekerController);

    CritiqueSeekerController.$inject = ['$rootScope', '$scope', '$log'];

    function CritiqueSeekerController($rootScope, $scope, $log) {
        $log.info("Welcome Critique Seeker!");
    };
})();