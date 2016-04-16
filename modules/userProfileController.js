businessApp.controller('userProfileController', function($scope, $rootScope, $http, $stateParams, $state) {

    var getReviewer = function() {
        // console.log("user in " + $stateParams.userID);
        $rootScope.isHome = false;

        $scope.userId = $stateParams.userID;
        var url = 'http://localhost:8080/demoproject/webapi/reviewer/' + $scope.userId;
        $http.get(url).success(function(data) {
            $scope.reviewerData = data;
            //console.log($scope.reviewerData);
            getFriendsList();

        }).error(function(data) {
            $scope.reviewerData = data;
        });
    };

    var getFriendsList = function() {
        var friendsStr = $scope.reviewerData.FRIENDS;
        $scope.friendsList = friendsStr.substring(1, friendsStr.length - 2).split(',');
        $scope.friendsCount = $scope.friendsList.length;
        //console.log($scope.friendsCount);
    };

    getReviewer();


});