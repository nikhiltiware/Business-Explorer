businessApp.controller('businessProfileController', function($scope, $http, $state, $stateParams) {

    var getBusiness = function() {
        $scope.businessId = $stateParams.businessID;

        var url = 'http://localhost:8080/demoproject/webapi/business/' + $scope.businessId;
        $http.get(url).success(function(data) {
            $scope.businessData = data;
            console.log($scope.businessData);
            setBusinessInfo($scope.businessId);
            getReviews($scope.businessId);
            getMonthlyTrends($scope.businessId);
        }).error(function(data) {
            $scope.businessData = data;
        });
    }

    var setBusinessInfo = function() {
        var businessInfo = [];

        if ($scope.businessData.hasOwnProperty('ATTRIBUTES_TAKES_RESERVATIONS'))
            businessInfo.push({
                "key": "Takes Reservations",
                "value": $scope.businessData.ATTRIBUTES_TAKES_RESERVATIONS == "TRUE" ? "Yes" : "No"

            });

        if ($scope.businessData.hasOwnProperty('ATTRIBUTES_DELIVERY'))
            businessInfo.push({
                "key": "Delivery",
                "value": $scope.businessData.ATTRIBUTES_DELIVERY == "TRUE" ? "Yes" : "No"

            });

        if ($scope.businessData.hasOwnProperty('ATTRIBUTES_TAKEOUT'))
            businessInfo.push({
                "key": "Take-out",
                "value": $scope.businessData.ATTRIBUTES_TAKEOUT == "TRUE" ? "Yes" : "No"

            });

        if ($scope.businessData.hasOwnProperty('ATTRIBUTES_ACCEPTSCREDITCARDS'))
            businessInfo.push({
                "key": "Accepts Credit Cards",
                "value": $scope.businessData.ATTRIBUTES_ACCEPTSCREDITCARDS == "TRUE" ? "Yes" : "No"

            });

        if ($scope.businessData.hasOwnProperty('ATTRIBUTES_WHEELCHAIR'))
            businessInfo.push({
                "key": "Wheelchair Accessible",
                "value": $scope.businessData.ATTRIBUTES_WHEELCHAIR == "TRUE" ? "Yes" : "No"

            });

        if ($scope.businessData.hasOwnProperty('ATTRIBUTES_GOODFOR_KIDS'))
            businessInfo.push({
                "key": "Good for Kids",
                "value": $scope.businessData.ATTRIBUTES_GOODFOR_KIDS == "TRUE" ? "Yes" : "No"

            });

        if ($scope.businessData.hasOwnProperty('ATTRIBUTES_GOODFOR_GROUPS'))
            businessInfo.push({
                "key": "Good for Groups",
                "value": $scope.businessData.ATTRIBUTES_GOODFOR_GROUPS == "TRUE" ? "Yes" : "No"

            });

        if ($scope.businessData.hasOwnProperty('ATTRIBUTES_ALCOHOL'))
            businessInfo.push({
                "key": "Alcohol",
                "value": $scope.businessData.ATTRIBUTES_ALCOHOL == "none" ? "No" : "Yes"

            });

        if ($scope.businessData.hasOwnProperty('ATTRIBUTES_NOISELEVEL'))
            businessInfo.push({
                "key": "Noise Level",
                "value": $scope.businessData.ATTRIBUTES_NOISELEVEL

            });

        $scope.businessInfo = businessInfo;


    }

    var getReviews = function(businessId) {
        var url = 'http://localhost:8080/demoproject/webapi/business/' + businessId + '/reviews';
        $http.get(url).success(function(data) {
            $scope.reviewData = data;
            //console.log($scope.reviewData);

        }).error(function(data) {
            $scope.reviewData = data;
        });

    }

    var getMonthlyTrends = function(businessId) {
        var url = 'http://localhost:8080/demoproject/webapi/business/' + businessId + '/monthly_trends';
        $http.get(url).success(function(data) {
            $scope.trendData = data;
            console.log($scope.trendData);

        }).error(function(data) {
            $scope.trendData = data;
        });

    }

    getBusiness();



});