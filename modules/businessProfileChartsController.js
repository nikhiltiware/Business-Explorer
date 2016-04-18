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
            },       title: {
                enable: true,
                text: 'Review Rating Distribution'
            },
            subtitle: {
                enable: true,
                text: 'This bar chart shows the ratings (No. of Stars) provided to the business',
                css: {
                    'text-align': 'center',
                    'margin': '10px 13px 0px 7px'
                }
            }
        };

var ratingArray=["0","1","2","3","4","5"];

for(var rating of ratingArray){
var propArray= $scope.businessRatingDist.map(function(a) {return a.STARS;});
    if( propArray.indexOf(rating) <= -1){
    $scope.businessRatingDist.push(
        {
            "BUSINESS_ID":$scope.businessId,
            "COUNT":0,
            "STARS":rating

        }
    );
    }
}
         $scope.businessRatingDist.sort(function(a, b){
    return b.STARS - a.STARS;
});


        $scope.data = [{
            "key": "Rating Distribution",
            "color": "#337ab7",
            "values": $scope.businessRatingDist
        }];

    }
    

    getRatingDist();
});
