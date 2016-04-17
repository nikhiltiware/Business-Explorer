businessApp.controller('dailyTrendsHourCategoryDistributionController', function($scope, $http) {

    $scope.dailyTrendsHourCategoryDistributionDataLoaded = false;
    $scope.dailyTrendsHourCategoryDistributionStatus = {
        isopen: false
    };
    $scope.dailyTrendsHourCategoryDistributionButton2Status = {
        isopen: false
    };

    $scope.dailyTrendsHourCategoryDistributionDayName = 'Sunday';
    $scope.dailyTrendsHourCategoryDistributionCategory = 'Food';
    this.categoryList = ["Food", "Restaurants", "Shopping", "Active Life", "Arts and Entertainment", "Automotive", "Beauty and Spas", "Education", "Event Planning and Services", "Health and Medical", "Home Services", "Local Services"];



    $scope.dailyTrendsHourCategoryDistributionDrawChart = function(day, category) {

        // var day='0';
        var city = 'Las Vegas';
        $scope.dailyTrendsHourCategoryDistributionCategory = category;
        //var category = 'Food';
        //  var url1 = 'http://localhost:8080/demoproject/webapi/trends/day_checkin/' + city + '/' + day;
        var url2 = 'http://localhost:8080/demoproject/webapi/trends/daily_checkin/' + city + '/' + category;
        $scope.dailyTrendsHourCategoryDistributionDayName = 'Sunday';
        if (day == 0) {
            $scope.dailyTrendsHourCategoryDistributionDayName = 'Sunday';
        } else if (day == 1) {
            $scope.dailyTrendsHourCategoryDistributionDayName = 'Monday';
        } else if (day == 2) {
            $scope.dailyTrendsHourCategoryDistributionDayName = 'Tuesday';
        } else if (day == 3) {
            $scope.dailyTrendsHourCategoryDistributionDayName = 'Wednesday';
        } else if (day == 4) {
            $scope.dailyTrendsHourCategoryDistributionDayName = 'Thursday';
        } else if (day == 5) {
            $scope.dailyTrendsHourCategoryDistributionDayName = 'Friday';
        } else {
            $scope.dailyTrendsHourCategoryDistributionDayName = 'Saturday';
        }







        $http.get(url2).success(function(sdata) {





            $scope.hourlyBarChartOptions = {

                chart: {
                    type: 'lineChart',
                    height: 450,
                    width: 550,
                    margin: {
                        top: 10,
                        right: 20,
                        bottom: 40,
                        left: 55
                    },
                    x: function(d) {
                        return d.x;
                    },
                    y: function(d) {
                        return d.y;
                    },
                    useInteractiveGuideline: true,
                    dispatch: {
                        stateChange: function(e) {
                            console.log("stateChange");
                        },
                        changeState: function(e) {
                            console.log("changeState");
                        },
                        tooltipShow: function(e) {
                            console.log("tooltipShow");
                        },
                        tooltipHide: function(e) {
                            console.log("tooltipHide");
                        }
                    },
                    xAxis: {
                        axisLabel: 'Time (Hours)',
                        ticks: 15
                    },
                    showValues: true,
                    yAxis: {
                        axisLabel: 'Average Checkins',
                        tickFormat: function(d) {
                            return (d);
                        },
                        axisLabelDistance: -10
                    },
                    callback: function(chart) {
                        console.log("!!! lineChart callback !!!");
                    }
                },
                title: {
                    enable: true,
                    text: 'Average Checkin for a particular category in nth Hour of the day'
                },
                subtitle: {
                    enable: false,
                    text: 'Subtitle for simple line chart. Lorem ipsum dolor sit amet, at eam blandit sadipscing, vim adhuc sanctus disputando ex, cu usu affert alienum urbanitas.',
                    css: {
                        'text-align': 'center',
                        'margin': '10px 13px 0px 7px'
                    }
                },
                caption: {
                    enable: false,
                    html: '<b>Figure 1.</b> Lorem ipsum dolor sit amet, at eam blandit sadipscing, <span style="text-decoration: underline;">vim adhuc sanctus disputando ex</span>, cu usu affert alienum urbanitas. <i>Cum in purto erat, mea ne nominavi persecuti reformidans.</i> Docendi blandit abhorreant ea has, minim tantas alterum pro eu. <span style="color: darkred;">Exerci graeci ad vix, elit tacimates ea duo</span>. Id mel eruditi fuisset. Stet vidit patrioque in pro, eum ex veri verterem abhorreant, id unum oportere intellegam nec<sup>[1, <a href="https://github.com/krispo/angular-nvd3" target="_blank">2</a>, 3]</sup>.',
                    css: {
                        'text-align': 'justify',
                        'margin': '10px 13px 0px 7px'
                    }
                }
            };
            var dataArray = [];


            for (var obj of sdata) {
                //  console.log(obj.DAY)
                if (obj.DAY === $scope.dailyTrendsHourCategoryDistributionDayName) {
                    for (var propName of Object.keys(obj)) {
                        // console.log(propName)
                        if (propName != 'DAY') {
                            var stringSplit = propName.split('_');
                            var arrObj = {
                                x: parseInt(stringSplit[1]),
                                y:  Math.round( obj[propName] * 10 ) / 10
                            }
                            // console.log(arrObj)
                            dataArray.push(arrObj)

                        }


                    }


                }
            }

            compare = function(a, b) {
                if (a.x < b.x)
                    return -1;
                else if (a.x > b.x)
                    return 1;
                else
                    return 0;
            }

            dataArray.sort(compare);


            console.log(dataArray);

            $scope.hourlyBarChartData = [{
                values: dataArray, //values - represents the array of {x,y} data points
                key: 'Average Check-ins', //key  - the name of the series.
                color: '#337ab7', //color - optional: choose your own line color.
                strokeWidth: 2,
                classed: 'dashed'
            }]



            //            $scope.hourlyBarChartData = [{
            //                key: "Cumulative Return",
            //                values: dataArray
            //            }]





        }).error(function(sdata) {
            this.chartdata = sdata;
        });







        $scope.dailyTrendsHourCategoryDistributionDataLoaded = true;

        //setClickEvent();

    }

    $scope.dailyTrendsHourCategoryDistributionDrawChart(0, $scope.dailyTrendsHourCategoryDistributionCategory);
});
