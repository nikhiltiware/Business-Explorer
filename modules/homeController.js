businessApp.controller('homeController', function($scope, $rootScope, $http, $stateParams, $state) {
    $scope.setHome = function() {
        $rootScope.isHome = true;
    }

});