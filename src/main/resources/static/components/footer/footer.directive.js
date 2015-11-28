(function() {
    'use strict';

    angular
        .module('myApp')
        .directive('mainFooter', Footer);


    function Footer () {

        var footer = {
            templateUrl: 'components/footer/footer.directive.html'
        };

        return footer;
    }
})();