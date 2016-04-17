businessApp.controller('hourlyCategoriesCheckinTrendsController', function($scope, $http) {

    $scope.ishourlyCategoriesCheckinTrendsPieChartDataLoaded = false;
    $scope.hourlyCategoriesCheckinTrendsButton1Status = {
        isopen: false
    };
    $scope.hourlyCategoriesCheckinTrendsDayName = 'sunday';
    $scope.hourlyCategoriesCheckinTrendsHourName = 0;

    $scope.resolveDay = function(day) {
        if (day == 'sunday') {
            return 0;
        } else if (day == 'monday') {
            return 1;
        } else if (day == 'tuesday') {
            return 2;
        } else if (day == 'wednesday') {
            return 3;
        } else if (day == 'thursday') {
            return 4;
        } else if (day == 'friday') {
            return 5;
        } else {
            return 6;
        }
    }
    $scope.resolveHour = function(hour) {
        if (hour == 0) {
            return "12-01 A.M";
        } else if (hour == 1) {
            return "01-02 A.M";
        } else if (hour == 2) {
            return "02-03 A.M";
        } else if (hour == 3) {
            return "03-04 A.M";
        } else if (hour == 4) {
            return "04-05 A.M";
        } else if (hour == 5) {
            return "05-06 A.M";
        } else if (hour == 6) {
            return "06-07 A.M";
        } else if (hour == 7) {
            return "07-08 A.M";
        } else if (hour == 8) {
            return "08-09 A.M";
        } else if (hour == 9) {
            return "09-10 A.M";
        } else if (hour == 10) {
            return "10-11 A.M";
        } else if (hour == 11) {
            return "11-12 A.M";
        } else if (hour == 12) {
            return "12-01 P.M";
        } else if (hour == 13) {
            return "01-02 P.M";
        } else if (hour == 14) {
            return "02-03 P.M";
        } else if (hour == 15) {
            return "03-04 P.M";
        } else if (hour == 16) {
            return "04-05 P.M";
        } else if (hour == 17) {
            return "05-06 P.M";
        } else if (hour == 18) {
            return "06-07 P.M";
        } else if (hour == 19) {
            return "07-08 P.M";
        } else if (hour == 20) {
            return "08-09 P.M";
        } else if (hour == 21) {
            return "09-10 P.M";
        } else if (hour == 22) {
            return "10-11 P.M";
        } else {
            return "11-12 P.M";
        }


    }

    $scope.hourlyCategoriesCheckinTrendsDrawChart = function(day, hour) {

        // var day='0';
        var city = 'Las Vegas';
        var url1 = 'http://localhost:8080/demoproject/webapi/trends/hourly_checkin/' + city + '/' + day + '/' + hour;
        //var url2 = 'http://localhost:8080/demoproject/webapi/trends/daily_checkin/' + city + '/' + category;
        $scope.hourlyCategoriesCheckinTrendsHourName = hour;
        $scope.hourlyCategoriesCheckinTrendsDayName = 'sunday';
        if (day == 0) {
            $scope.hourlyCategoriesCheckinTrendsDayName = 'sunday';
        } else if (day == 1) {
            $scope.hourlyCategoriesCheckinTrendsDayName = 'monday';
        } else if (day == 2) {
            $scope.hourlyCategoriesCheckinTrendsDayName = 'tuesday';
        } else if (day == 3) {
            $scope.hourlyCategoriesCheckinTrendsDayName = 'wednesday';
        } else if (day == 4) {
            $scope.hourlyCategoriesCheckinTrendsDayName = 'thursday';
        } else if (day == 5) {
            $scope.hourlyCategoriesCheckinTrendsDayName = 'friday';
        } else {
            $scope.hourlyCategoriesCheckinTrendsDayName = 'saturday';
        }
        var url1 = 'http://localhost:8080/demoproject/webapi/trends/hourly_checkin/' + city + '/' + day + '/' + hour;

        $http.get(url1).success(function(sdata) {

            $scope.hourlyCategoriesCheckinTrendsPieChartData = sdata;

            console.log($scope.hourlyCategoriesCheckinTrendsPieChartData);

            $scope.hourlyCategoriesCheckinTrendsPieChartOptions = {
                chart: {
                    type: 'pieChart',
                    height: 500,
                    width: 500,
                    x: function(d) {
                        return d.CATEGORY;
                    },
                    y: function(d) {
                        return d.CHECKIN_COUNT;
                    },
                    showLabels: true,
                    duration: 2000,
                    labelThreshold: 0.01,
                    labelSunbeamLayout: true,
                    legend: {
                        margin: {
                            top: 5,
                            right: 35,
                            bottom: 5,
                            left: 0
                        }
                    }
                }
            };







        }).error(function(sdata) {
            this.chartdata = sdata;
        });





        //        $http.get(url2).success(function(sdata) {
        //
        //
        //
        //
        //
        //            $scope.hourlyBarChartOptions = {
        //
        //                chart: {
        //                    type: 'discreteBarChart',
        //                    height: 450,
        //                    margin: {
        //                        top: 20,
        //                        right: 20,
        //                        bottom: 50,
        //                        left: 55
        //                    },
        //                    x: function(d) {
        //                        var strSplit=d.label.split('_');
        //                        return strSplit[1];
        //                    },
        //                    y: function(d) {
        //                        return d.value;
        //                    },
        //                    showValues: true,
        //                    valueFormat: function(d) {
        //                        return d3.format(',.4f')(d);
        //                    },
        //                    duration: 500,
        //                    xAxis: {
        //                        axisLabel: 'nth Hour'
        //                    },
        //                    yAxis: {
        //                        axisLabel: 'Average Checkins',
        //                        axisLabelDistance: -5
        //                    }
        //                }
        //
        //            };
        //            var dataArray = [];
        //
        //
        //            for (var obj of sdata) {
        //              //  console.log(obj.DAY)
        //                if (obj.DAY ===$scope.dayName ) {
        //                    for (var propName of Object.keys(obj)) {
        //                       // console.log(propName)
        //                        if (propName != 'DAY'){
        //                        var arrObj = {
        //                                label: propName,
        //                                value: obj[propName]
        //                            }
        //                       // console.log(arrObj)
        //                        dataArray.push(arrObj)
        //                        }
        //
        //
        //                    }
        //
        //
        //                }
        //            }
        //
        //            console.log(dataArray);
        //            $scope.hourlyBarChartData = [{
        //                key: "Cumulative Return",
        //                values: dataArray
        //            }]
        //
        //
        //
        //
        //
        //        }).error(function(sdata) {
        //            this.chartdata = sdata;
        //        });







        $scope.ishourlyCategoriesCheckinTrendsPieChartDataLoaded = true;
        //setClickEvent();

    }

    $scope.hourlyCategoriesCheckinTrendsDrawChart(0, 0);
});
