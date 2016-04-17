businessApp.controller('categoriesReviewerReviewsDistributionController', function($scope, $http) {

    $scope.iscategoriesReviewerReviewsDistributionDataLoaded = false;
    $scope.categoriesReviewerReviewsDistributionStatus = {
        isopen: false
    };





    $scope.categoriesReviewerReviewsDistributionDrawChart = function() {

        // var day='0';
        //var city = 'Las Vegas';
        var reviewerID = $scope.userId;
        var url1 = 'http://localhost:8080/demoproject/webapi/reviewer/'+reviewerID+'/categories_review_distribution';




        $http.get(url1).success(function(sdata) {

            $scope.categoriesReviewerReviewsDistributionData = sdata;

            console.log($scope.categoriesReviewerReviewsDistributionData);


            var categoriesArray=["Food","Restaurants","Shopping","Active Life","Arts and Entertainment","Automotive","Beauty and Spas","Education","Event Planning and Services","Health and Medical","Home Services","Local Services"];

for(var category of categoriesArray){
var propArray= $scope.categoriesReviewerReviewsDistributionData.map(function(a) {return a.CATEGORY;});
    if( propArray.indexOf(category) <= -1){
    $scope.categoriesReviewerReviewsDistributionData.push(
        {
            "CATEGORY":category,
            "COUNT":0,
            "USER_ID":reviewerID

        }
    );
    }
}
            $scope.categoriesReviewerReviewsDistributionOptions = {
             chart: {
                type: 'multiBarHorizontalChart',
                 margin: {
                     top: 30,
                     right: 10,
                     bottom: 46,
                     left: 200
                 },
                height: 450,
                 width: 600,
                x: function(d){return d.CATEGORY;},
                y: function(d){return d.COUNT;},
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


$scope.categoriesReviewerReviewsDistributionData=[
            {
                "key": "Series1",
                "color": "#d62728",
                "values": $scope.categoriesReviewerReviewsDistributionData
            }];




        }).error(function(sdata) {
            this.categoriesReviewerReviewsDistributionData = sdata;
        });












        $scope.iscategoriesReviewerReviewsDistributionDataLoaded = true;
        //setClickEvent();

    }

    $scope.categoriesReviewerReviewsDistributionDrawChart();
});
