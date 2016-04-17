businessApp.controller('businessCategoryTrendsController', function($scope, $http) {

    $scope.isbusinessCategoryTrendsDataLoaded = false;
    $scope.businessCategoryTrendsStatus = {
        isopen: false
    };





    $scope.businessCategoryTrendsDrawChart = function() {

        // var day='0';
        var city = 'Las Vegas';
        var category = 'Food';
        var url1 = 'http://localhost:8080/demoproject/webapi/trends/rating_distribution/'+city;




        $http.get(url1).success(function(sdata) {

            $scope.businessCategoryTrendsData = sdata;

            console.log($scope.businessCategoryTrendsData);

            $scope.businessCategoryTrendsOptions = {
             chart: {
                type: 'multiBarHorizontalChart',
                 margin: {
                     top: 30,
                     right: 10,
                     bottom: 46,
                     left: 200
                 },
                height: 450,
                 width: 750,
                x: function(d){return d.CATEGORIES;},
                y: function(d){return d.STARS;},
                showControls: true,
                showValues: true,
                duration: 500,
                xAxis: {
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Values',
                    ticks:10,
                    tickFormat: function(d){
                        return d3.format(',.2f')(d);
                    }
                }
            }
            };


$scope.businessCategoryTrendsData=[
            {
                "key": "Series1",
                "color": "#d62728",
                "values": $scope.businessCategoryTrendsData
            }];




        }).error(function(sdata) {
            this.businessCategoryTrendsData = sdata;
        });












        $scope.isbusinessCategoryTrendsDataLoaded = true;
        //setClickEvent();

    }

    $scope.businessCategoryTrendsDrawChart();
});
