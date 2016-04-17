businessApp.controller('hourlyTrendsPieChartController', function($scope, $rootScope, $http, $stateParams, $state) {

    $scope.ishourlyTrendsPieChartDataLoaded = false;
    $scope.status = {
        isopen: false
    };
    $scope.dayName = 'Sunday';




    $scope.drawChart = function(day) {

        // var day='0';
        var city = 'Las Vegas';
        var category = 'Food';
        var url1 = 'http://localhost:8080/demoproject/webapi/trends/day_checkin/' + city + '/' + day;
        var url2 = 'http://localhost:8080/demoproject/webapi/trends/daily_checkin/' + city + '/' + category;
        $scope.dayName = 'Sunday';
        if (day == 0) {
            dayName = 'Sunday';
        } else if (day == 1) {
            $scope.dayName = 'Monday';
        } else if (day == 2) {
            $scope.dayName = 'Tuesday';
        } else if (day == 3) {
            $scope.dayName = 'Wednesday';
        } else if (day == 4) {
            $scope.dayName = 'Thursday';
        } else if (day == 5) {
            $scope.dayName = 'Friday';
        } else {
            $scope.dayName = 'Saturday';
        }


        $http.get(url1).success(function(sdata) {

            $scope.hourlyTrendsPieChartData = sdata;

            console.log($scope.hourlyTrendsPieChartData);

            $scope.hourlyTrendsPieChartOptions = {
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





        $http.get(url2).success(function(sdata) {





            $scope.hourlyBarChartOptions = {

                chart: {
                    type: 'discreteBarChart',
                    height: 450,
                    margin: {
                        top: 20,
                        right: 20,
                        bottom: 50,
                        left: 55
                    },
                    x: function(d) {
                        var strSplit = d.label.split('_');
                        return strSplit[1];
                    },
                    y: function(d) {
                        return d.value;
                    },
                    showValues: true,
                    valueFormat: function(d) {
                        return d3.format(',.4f')(d);
                    },
                    duration: 500,
                    xAxis: {
                        axisLabel: 'nth Hour'
                    },
                    yAxis: {
                        axisLabel: 'Average Checkins',
                        axisLabelDistance: -5
                    }
                }

            };
            var dataArray = [];


            for (var obj of sdata) {
                //  console.log(obj.DAY)
                if (obj.DAY === $scope.dayName) {
                    for (var propName of Object.keys(obj)) {
                        // console.log(propName)
                        if (propName != 'DAY') {
                            var arrObj = {
                                label: propName,
                                value: obj[propName]
                            }
                            // console.log(arrObj)
                            dataArray.push(arrObj)
                        }


                    }


                }
            }

            console.log(dataArray);
            $scope.hourlyBarChartData = [{
                key: "Cumulative Return",
                values: dataArray
            }]





        }).error(function(sdata) {
            this.chartdata = sdata;
        });







        $scope.ishourlyTrendsPieChartDataLoaded = true;
        //setClickEvent();

    }

    $scope.drawChart(0);
});
