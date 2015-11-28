(function() {
    'use strict';

    angular
        .module('myApp')
        .directive('mainHeader', Header);

    function Header () {

        var header = {
            templateUrl: 'components/header/header.directive.html'
        };

        return header;
    }
})();