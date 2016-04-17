businessApp.controller('businessProfileChartsController', function($scope, $rootScope, $http, $stateParams, $state) {
    
    $scope.isBusinessChartDataLoaded = false;
    var getRatingDist = function() {
        var url = 'http://localhost:8080/demoproject/webapi/business/'+$scope.businessId+'/rating_distribution';

        $http.get(url).success(function(data) {
            $scope.businessRatingDist = data;
            setRatingDistConfig();
            $scope.isBusinessChartDataLoaded = true;
            console.log($scope.businessRatingDist);
        }).error(function(data) {
            $scope.businessRatingDist = data;
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
                    axisLabel: 'Number of Reviews',
                    tickFormat: function(d) {
                        return d3.format(',.2f')(d);
                    }
                }
            }
        };

        $scope.data = [{
            "key": "Rating Distribution",
            "color": "#337ab7",
            "values": $scope.businessRatingDist
        }];

    }
    

    getRatingDist();
});
