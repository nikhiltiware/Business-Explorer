businessApp.controller('userProfileChartsController', function($scope, $http) {

    $scope.isDataLoaded = false;
    var getRatingDist = function() {
        var url = 'http://localhost:8080/demoproject/webapi/reviewer/'+$scope.userId+'/rating_distribution';

        $http.get(url).success(function(data) {
            $scope.userRatingDist = data;
            setRatingDistConfig();
            $scope.isDataLoaded = true;
            console.log($scope.userRatingDist);
        }).error(function(data) {
            $scope.userRatingDist = data;
        });
    };

    var setRatingDistConfig = function() {
        $scope.options = {
            chart: {
                type: 'multiBarHorizontalChart',
                height: 450,
                width: 600,
                x: function(d) {
                    return d.STARS;
                },
                y: function(d) {
                    return d.COUNT;
                },
                showControls: true,
                showValues: true,
                duration: 500,
                xAxis: {
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Values',
                    tickFormat: function(d) {
                        return d3.format(',.2f')(d);
                    }
                }
            }
        };

        $scope.data = [{
            "key": "Series1",
            "color": "#337ab7",
            "values": $scope.userRatingDist
        }];

    }




    getRatingDist();

});