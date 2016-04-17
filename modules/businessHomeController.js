businessApp.controller('businessHomeController', function($scope, $rootScope, $http, $stateParams, $state) {
    this.tab = 1;
    var city = $rootScope.searchCities;
    var category = 'Food';
    var review_count_threshold = 0;
    $rootScope.isHome = false;
    $scope.isHome = false;

    var initializer = function() {
        var url = 'http://localhost:8080/demoproject/webapi/business/' + city + '/' + category + '/' + review_count_threshold;
        console.log(url);
        $http.get(url).success(function(data) {
            $scope.businesses = data;
        }).error(function(data) {
            $scope.businesses = data;
        });
        //$scope.businesses
    };




    this.click2ndEvent = function(cities, category, review_count) {

        //var city = 'Las Vegas';
        //this.category = category;

        this.review_count_threshold = 0;
        var url = 'http://localhost:8080/demoproject/webapi/business/' + city + '/' + category + '/' + this.review_count_threshold;

        $http.get(url)
            .success(function(data) {
                $scope.businesses = data;
            }).error(function(data) {
                $scope.businesses = data;
            });
    }

    this.selectTab = function(setTab) {
        this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
        return this.tab === checkTab;
    };

    this.openBusinessProfile = function(businessId) {
        console.log(businessId);
        $state.go('businessProfile', {
            businessID: businessId
        });
    }


    initializer();
});
