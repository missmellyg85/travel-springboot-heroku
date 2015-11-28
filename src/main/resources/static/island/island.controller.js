(function(angular) {
    'use strict';

    var app = angular
        .module('myApp')

    app.controller('islandController', Controller);

    Controller.inject = ['$scope', '$firebaseArray'];

    function Controller ($scope, $firebaseArray) {

        var islandRef = new Firebase("https://sweltering-fire-4732.firebaseio.com/island");
        var destRef = new Firebase("https://sweltering-fire-4732.firebaseio.com/destination");

        // create a synchronized array
        $scope.destinations = $firebaseArray(destRef);

        // create a synchronized array
        $scope.islands = $firebaseArray(islandRef);
        // add new items to the array
        // the message is automatically added to our Firebase database!
        $scope.addIsland = function() {
            $scope.islands.$add({
                name: $scope.newIslandName,
                description: $scope.newIslandDescription,
                destinationKey: $scope.newIslandDestinationKey
            });
        };

        $scope.getDestinationName =function(key){
          var dest = $scope.destinations.$getRecord(key);
          return dest == null ? "" : dest.name;
        };

    }

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/islands', {templateUrl: 'island/island.html', controller: 'islandController'})
            .whenAuthenticated('/admin/islands', { templateUrl: 'island/island.admin.html', controller: 'islandController'});
    }]);

})(angular);
