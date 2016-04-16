businessApp.controller('reviewerHomeController', function($scope, $rootScope, $http, $stateParams, $state) {
    this.tab = 1;
    var city = 'Las Vegas';
    var category = 'Food';
    var review_count_threshold = 0;
    $rootScope.isHome = false;


    var initializer = function() {
        var url = 'http://localhost:8080/demoproject/webapi/reviewer/home/Las Vegas/Food/top_reviewer/5';

        $http.get(url).success(function(data) {
            $scope.reviewers = data;
            getFriendsCount();
        }).error(function(data) {
            $scope.reviewers = data;
        });

        var url2 = 'http://localhost:8080/demoproject/webapi/reviewer/home/Las Vegas/Food/elite_reviewer/5';

        $http.get(url2).success(function(data) {
            $scope.elites = data;
            getElitesFriendsCount();
        }).error(function(data) {
            $scope.elites = data;
        });

        //$scope.reviewers*/


    };


    var getFriendsCount = function() {

        for (var j = 0; j < $scope.reviewers.length; j++) {
            var friendString = $scope.reviewers[j].FRIENDS.substring(0, $scope.reviewers[j].FRIENDS.length - 1).split(",");
            $scope.reviewers[j].FRIENDS_COUNT = friendString.length;
        }


    }

    var getElitesFriendsCount = function() {
        for (var j = 0; j < $scope.elites.length; j++) {
            var friendString = $scope.elites[j].FRIENDS.substring(0, $scope.elites[j].FRIENDS.length - 1).split(",");
            $scope.elites[j].FRIENDS_COUNT = friendString.length;
        }

    }

    this.click2ndEvent = function(city, category, review_count) {

        var city = 'Las Vegas';
        //this.category = category;
        this.review_count_threshold = 5;
        var url = 'http://localhost:8080/demoproject/webapi/reviewer/home/' + city + '/' + category + '/top_reviewer/' + this.review_count_threshold;

        $http.get(url)
            .success(function(data) {
                $scope.reviewers = data;
                getFriendsCount();
            }).error(function(data) {
                $scope.reviewers = data;
            });

        var url2 = 'http://localhost:8080/demoproject/webapi/reviewer/home/' + city + '/' + category + '/' + 'elite_reviewer/' + this.review_count_threshold;

        $http.get(url2).success(function(data) {
            $scope.elites = data;
            getElitesFriendsCount();
        }).error(function(data) {
            $scope.elites = data;
        });


    }

    this.openReviewerProfile = function(userId) {
        console.log(userId);
        $state.go('reviewerProfile', {
            userID: userId
        });
    }

    this.selectTab = function(setTab) {
        this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
        return this.tab === checkTab;
    };

    initializer();
});