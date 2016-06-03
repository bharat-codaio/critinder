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
        var self = this;
        self.toggler = [];
        $log.info("Welcome Critique Provider!");
        for(var i=1; i<7; i++)
        {
            self.toggler[i] = true;
        }
        
        this.butnpress = function(data)
        {
            console.log("Clicked eme ");
        };
        self.toggleSelect =  function(index){
            self.toggler[index] = !self.toggler[index];
            console.log(index);
        };
        return self;
        
    }
})();