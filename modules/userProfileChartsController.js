businessApp.controller('userProfileChartsController', function($scope, $rootScope, $http, $stateParams, $state) {

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
                    axisLabel: 'Review Count',

                }

            },
                title: {
                enable: true,
                text: 'Review Rating Distribution'
            },
            subtitle: {
                enable: true,
                text: 'This bar chart shows the ratings (No. of Stars) provided by the user',
                css: {
                    'text-align': 'center',
                    'margin': '10px 13px 0px 7px'
                }
            }
        };

        var ratingArray=["0","1","2","3","4","5"];

for(var rating of ratingArray){
var propArray= $scope.userRatingDist.map(function(a) {return a.STARS;});
    if( propArray.indexOf(rating) <= -1){
    $scope.userRatingDist.push(
        {
            "BUSINESS_ID":$scope.userId,
            "COUNT":0,
            "STARS":rating

        }
    );
    }
}
         $scope.userRatingDist.sort(function(a, b){
    return b.STARS - a.STARS;
});





        $scope.data = [{
            "key": "Ratings Distribution",
            "color": "#337ab7",
            "values": $scope.userRatingDist
        }];

    }




    getRatingDist();

});
