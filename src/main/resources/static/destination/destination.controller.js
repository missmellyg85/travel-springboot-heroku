(function(angular) {
    'use strict';

    var app = angular
        .module('myApp')

    app.controller('destinationController', Controller);

    Controller.inject = ['$scope', '$firebaseArray'];

    function Controller ($scope, $firebaseArray) {

        var ref = new Firebase("https://sweltering-fire-4732.firebaseio.com/destination");
        var islandRef = new Firebase("https://sweltering-fire-4732.firebaseio.com/island");
        var islands = $firebaseArray(islandRef);

        // create a synchronized array
        $scope.destinations = $firebaseArray(ref);
        $scope.islands = islands;

        // add new items to the array
        // the message is automatically added to our Firebase database!
        $scope.addDestination = function() {
            $scope.destinations.$add({
                name: $scope.newDestinationName,
                description: $scope.newDestinationDescription
            });
        };

        $scope.collapsibleElements = [{
        icon: 'mdi-image-filter-drama',
        title: 'First',
        content: 'Lorem ipsum dolor sit amet.'
    },{
        icon: 'mdi-maps-place',
        title: 'Second',
        content: 'Lorem ipsum dolor sit amet.'
    },{
        icon: 'mdi-social-whatshot',
        title: 'Third',
        content: 'Lorem ipsum dolor sit amet.'
    }
];

        $scope.getIslandsByDestination = function(dest){
          var destIslands = {};
          for(var i = 0; i < islands.length; i++){
            var island = islands[i];
            if(island.destinationKey == dest.$id){
              destIslands[island.name] = island.description;
            }
          }
          return destIslands;
        };

    }

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/destinations', {templateUrl: 'destination/destination.html', controller: 'destinationController'})
            .whenAuthenticated('/admin/destinations', { templateUrl: 'destination/destination.admin.html', controller: 'destinationController'});
    }]);

})(angular);
