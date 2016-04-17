businessApp.controller('WeekMonthChartController', function($scope, $http) {

    $scope.isWeeklyDataLoaded = false;
    var getWeelyData = function() {

        var url = 'http://localhost:8080/demoproject/webapi/trends/weekly_checkin/Las Vegas/Food';

        $http.get(url).success(function(data) {
            this.weeklyData = data;
            setWeeklyChartOptions();
            $scope.isWeeklyDataLoaded = true;
            console.log(this.weeklyData);
        }).error(function(data) {
            this.weeklyData = data;
        });
    }

    var setWeeklyChartOptions = function() {

        var chartData = [
            {
                day : "Sunday",
                CheckinCount : this.weeklyData.d_0
            },
            {
                day : "Monday",
                CheckinCount : this.weeklyData.d_1
            },
            {
                day : "Tuesday",
                CheckinCount : this.weeklyData.d_2
            },
            {
                day : "Wednesday",
                CheckinCount : this.weeklyData.d_3
            },
            {
                day : "Thursday",
                CheckinCount : this.weeklyData.d_4
            },
            {
                day : "Friday",
                CheckinCount : this.weeklyData.d_5
            },
            {
                day : "Saturday",
                CheckinCount : this.weeklyData.d_6
            },
        ]
        $scope.WeeklyChartoptions = {
            chart: {
                type: 'discreteBarChart',
                width :500,
                height: 350,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 100
                },
                x: function(d) {
                    return d.day;
                },
                y: function(d) {
                    return d.CheckinCount;
                },

                valueFormat: function(d) {
                    return d3.format('d')(d);
                },
                duration: 5000,
                xAxis: {
                    axisLabel: 'Day'
                },
                yAxis: {
                    axisLabel: 'Number of Checkins',
                    axisLabelDistance: 25
                }
            }
        };

        $scope.WeeklyChartData = [
            {
                key: "Cumulative Return",
                color: "#337ab7",
                values : chartData

            }];

    }

    getWeelyData();

});
