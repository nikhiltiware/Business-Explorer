businessApp.controller('monthlyBusinessTrendForBusinessController', function($scope, $http) {

    $scope.ismonthlyBusinessTrendForBusinessDataLoaded = false;
    $scope.monthlyBusinessTrendForBusinessStatus = {
        isopen: false
    };





    $scope.monthlyBusinessTrendForBusinessDrawChart = function() {

        // var day='0';
        var city = 'Las Vegas';
        var businessID = 'W3z8TV-MZIYkWgfN6cyJPg';
        var url1 = 'http://localhost:8080/demoproject/webapi/business/'+businessID+'/monthly_trends';




        $http.get(url1).success(function(sdata) {

            $scope.monthlyBusinessTrendForBusinessData = sdata;

            console.log($scope.monthlyBusinessTrendForBusinessData);

            $scope.monthlyBusinessTrendForBusinessOptions = {

            chart: {
                type: 'lineChart',
                height: 450,
                width: 600,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 55
                },
                x: function(d){ return new Date(d.MONTH_YEAR); },
                y: function(d){ return d.AVG_STARS; },
                useInteractiveGuideline: true,
                dispatch: {
                    stateChange: function(e){ console.log("stateChange"); },
                    changeState: function(e){ console.log("changeState"); },
                    tooltipShow: function(e){ console.log("tooltipShow"); },
                    tooltipHide: function(e){ console.log("tooltipHide"); }
                },
                xAxis: {
                    axisLabel: 'Date (ms)',
                    tickFormat: (function(d) { return d3.time.format('%x')(new Date(d)) })
                },
                yAxis: {
                    axisLabel: 'Average Stars',
                    tickFormat: function(d){
                        return d3.format('.02f')(d);
                    },
                    axisLabelDistance: -10
                },
                callback: function(chart){
                    console.log("!!! lineChart callback !!!");
                }
            },
            title: {
                enable: true,
                text: 'Timeline for business reviews'
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


$scope.monthlyBusinessTrendForBusinessData= [
                {
                    values:  $scope.monthlyBusinessTrendForBusinessData ,      //values - represents the array of {x,y} data points
                    key: 'Sine Wave', //key  - the name of the series.
                    color: '#ff7f0e',  //color - optional: choose your own line color.
                    strokeWidth: 2,
                    classed: 'dashed'
                }

            ];




        }).error(function(sdata) {
            this.monthlyBusinessTrendForBusinessData = sdata;
        });












        $scope.ismonthlyBusinessTrendForBusinessDataLoaded = true;
        //setClickEvent();

    }

    $scope.monthlyBusinessTrendForBusinessDrawChart();
});
