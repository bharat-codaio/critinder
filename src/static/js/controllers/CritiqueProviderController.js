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
        var vm = this;
        //vars
        vm.toggleGrid = [];
        vm.toggleHeart = [];
        for(var i=0; i<6; i++)
        {
            vm.toggleHeart[i]=false;
            vm.toggleGrid[i]= true;
        }


        vm.pressHeart = function(index){
            for(var i=0; i<6; i++)
            {
                if(i===index)
                    vm.toggleHeart[i]=true;
                else
                    vm.toggleHeart[i]=false;
            }
        }

        //functions
        vm.toggleSelector = function (index){
            console.log("gonna press " + index);
            vm.toggleGrid[index] = !(vm.toggleGrid[index]);
        }
    }
})();