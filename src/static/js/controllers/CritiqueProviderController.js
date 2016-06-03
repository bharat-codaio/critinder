/**
 * Created by bharatbatra on 6/2/16.
 */
(function(){

    'use strict';

    angular
        .module('critinderApp')
        .controller('CritiqueProviderController', CritiqueProviderController);

    CritiqueProviderController.$inject = ['$rootScope', '$scope', '$log'];

    function CritiqueProviderController($rootScope, $scope, $log) {
        $log.info("Welcome Critique Provider!");
    };
})();