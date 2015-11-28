(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('homeController', Controller);

    Controller.inject = ['$scope'];

    function Controller ($scope) {

        $scope.promos = [
          'Visit the Bahamas for your honeymoon!',
            'Ever thought of taking a photography class? Click here to sign up.',
            "Book with us to stay warm this winter!"
        ];

    }
})();
