(function(){
    'use strict';

    angular
        .module('critinderApp')
        .controller('CritiqueSeekerController', CritiqueSeekerController);

    CritiqueSeekerController.$inject = ['$rootScope', '$scope', '$log', 'Upload', '$timeout'];

    function CritiqueSeekerController($rootScope, $scope, $log, Upload, $timeout) {
        $log.info("Welcome Critique Seeker!");

        $scope.uploadFiles = function(file, errFiles) {
            $scope.f = file;
            $scope.errFile = errFiles && errFiles[0];
            if (file) {
                file.upload = Upload.upload({
                    url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                    data: {file: file}
                });

                file.upload.then(function (response) {
                    $timeout(function () {
                        file.result = response.data;
                    });
                }, function (response) {
                    if (response.status > 0)
                        $scope.errorMsg = response.status + ': ' + response.data;
                }, function (evt) {
                    file.progress = Math.min(100, parseInt(100.0 *
                        evt.loaded / evt.total));
                });
            }
        }
    }
})();