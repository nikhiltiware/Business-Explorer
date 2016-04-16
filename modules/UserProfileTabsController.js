businessApp.controller('UserProfileTabsController', function($scope, $http) {

    this.tab = 1;
    var initializer = function() {
        var url = 'http://localhost:8080/demoproject/webapi/reviewer/'+$scope.userId+'/reviews';

        $http.get(url).success(function(data) {
            $scope.userReviews = data;
            console.log($scope.reviewerData);
        }).error(function(data) {
            $scope.userReviews = data;
        });
    };

    this.getTips = function() {
        var url = 'http://localhost:8080/demoproject/webapi/reviewer/'+$scope.userId+'/tips';

        $http.get(url).success(function(data) {
            $scope.userTips = data;
            console.log($scope.userTips);
        }).error(function(data) {
            $scope.userTips = data;
        });
    };


    this.getFriends = function() {
        $scope.friends = [];
        var frndList = $scope.friendsList;
        var frndobjects = [];
        var count = 0;
        for (var i = 0; i < frndList.length; i++) {
            var tempId = frndList[i].trim().substring(1, frndList[i].length - 2);
            var url = 'http://localhost:8080/demoproject/webapi/reviewer/' + tempId;
            $http.get(url).success(function(data) {
                if (data != "")
                    frndobjects.push(data);
                if (count == frndList.length - 1) getFriendsCount(frndobjects);
                count++;
            }).error(function(data) {
                console.log(data);
            });

        }



    }

    var getFriendsCount = function(frndobjects) {

        for (var j = 0; j < frndobjects.length; j++) {
            var friendString = frndobjects[j].FRIENDS.substring(0, frndobjects[j].FRIENDS.length - 1).split(",");
            frndobjects[j].FRIENDS_COUNT = friendString.length;
        }
        $scope.friends = frndobjects;

    }

    this.selectTab = function(setTab) {
        this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
        return this.tab === checkTab;
    };

    initializer();

});