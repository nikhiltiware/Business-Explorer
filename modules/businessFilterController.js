businessApp.controller('businessFilterController', function($scope, $rootScope, $http, $stateParams, $state) {
    $scope.isCollapsed = true;
    $scope.checked = {};
    $scope.BusinessList = {};
    $scope.isDataFound = false;
    $scope.radio_attributes = {};
    $scope.radio_attributes.noise = "";
    $scope.radio_attributes.attire = "";
    $scope.radio_attributes.price = "";
    $scope.radio_attributes.age = "";
    $scope.radio_attributes.wifi = "";
    $scope.checked.food_attributes_checked = [];
    $scope.checked.music_attributes_checked = [];
    $scope.checked.ambience_attributes_checked = [];
    $scope.checked.misc_attributes_checked = [];
    $scope.checked.hair_attributes_checked = [];
    $scope.checked.gooodfor_attributes_checked = [];

    $scope.wifi_attributes = [{
        "NAME": "No",
        "ATTR": "no"
    }, {
        "NAME": "Paid",
        "ATTR": "paid"
    }, {
        "NAME": "Free",
        "ATTR": "free"
    }];
    $scope.age_attributes = [{
        "NAME": "All Ages",
        "ATTR": "allages"
    }, {
        "NAME": "21 plus",
        "ATTR": "21plus"
    }, {
        "NAME": "18 plus",
        "ATTR": "18plus"
    }, {
        "NAME": "19 plus",
        "ATTR": "19plus"
    }];
    $scope.price_attributes = [{
        "NAME": "$",
        "ATTR": "1"
    }, {
        "NAME": "$$",
        "ATTR": "2"
    }, {
        "NAME": "$$$",
        "ATTR": "3"
    }, {
        "NAME": "$$$$",
        "ATTR": "4"
    }];
    $scope.noise_attributes = [{
        "NAME": "Very Loud",
        "ATTR": "very_loud"
    }, {
        "NAME": "Average",
        "ATTR": "average"
    }, {
        "NAME": "Loud",
        "ATTR": "loud"
    }, {
        "NAME": "Quiet",
        "ATTR": "quiet"
    }];
    $scope.attire_attributes = [{
        "NAME": "Dressy",
        "ATTR": "dressy"
    }, {
        "NAME": "Formal",
        "ATTR": "formal"
    }, {
        "NAME": "Casual",
        "ATTR": "casual"
    }];
    $scope.hair_attributes = [{
            "NAME": "HAIR EXTENSIONS",
            "ATTR": "ATTRIBUTES_HAIR_EXTENSIONS"
        }, {
            "NAME": "HAIR PERMS",
            "ATTR": "ATTRIBUTES_HAIR_PERMS"
        }, {
            "NAME": "HAIR CURLY",
            "ATTR": "ATTRIBUTES_HAIR_CURLY"
        }, {
            "NAME": "AFRO AMERICAN",
            "ATTR": "ATTRIBUTES_HAIR_AFROAMERICAN"
        }, {
            "NAME": "KIDS",
            "ATTR": "ATTRIBUTES_HAIR_KIDS"
        }, {
            "NAME": "STRAIGHT PERMS",
            "ATTR": "ATTRIBUTES_HAIR_STRAIGHTPERMS"
        }, {
            "NAME": "ASIAN",
            "ATTR": "ATTRIBUTES_HAIR_ASIAN"
        }, {
            "NAME": "COLORING",
            "ATTR": "ATTRIBUTES_HAIR_COLORING"
        }

    ];
    $scope.misc_attributes = [{
        "NAME": "COAT CHECK",
        "ATTR": "ATTRIBUTES_COATCHECK"
    }, {
        "NAME": "ACCEPTS INSURANCE",
        "ATTR": "ATTRIBUTES_ACCEPTSINSURANCE"
    }, {
        "NAME": "HAS TV",
        "ATTR": "ATTRIBUTES_HASTV"
    }, {
        "NAME": "DOGS ALLOWED",
        "ATTR": "ATTRIBUTES_DOGSALLOWED"
    }, {
        "NAME": "SMOKING",
        "ATTR": "ATTRIBUTES_SMOKING"
    }, {
        "NAME": "OPEN 24 HOURS",
        "ATTR": "ATTRIBUTES_OPEN24HOURS"
    }, {
        "NAME": "OUTDOOR SEATING",
        "ATTR": "ATTRIBUTES_OUTDOORSEATING"
    }, {
        "NAME": "BY APPOINTMENT ONLY",
        "ATTR": "ATTRIBUTES_BYAPPOINTMENTONLY"
    }, {
        "NAME": "ACCEPTS CREDIT CARDS",
        "ATTR": "ATTRIBUTES_ACCEPTSCREDITCARDS"
    }, {
        "NAME": "TAKES RESERVATIONS",
        "ATTR": "ATTRIBUTES_TAKES_RESERVATIONS"
    }, {
        "NAME": "ATTRIBUTES DELIVERY",
        "ATTR": "ATTRIBUTES_DELIVERY"
    }, {
        "NAME": "WHEELCHAIR",
        "ATTR": "ATTRIBUTES_WHEELCHAIR"
    }];

    $scope.parking_attributes = [{
        "NAME": "PARKING VALIDATED",
        "ATTR": "ATTRIBUTES_PARKING_VALIDATED"
    }, {
        "NAME": "PARKING LOT",
        "ATTR": "ATTRIBUTES_PARKINGLOT"
    }, {
        "NAME": "PARKING STREET",
        "ATTR": "ATTRIBUTES_PARKINGSTREET"
    }, {
        "NAME": "PARKING GARAGE",
        "ATTR": "ATTRIBUTES_PARKING_GARAGE"
    }, {
        "NAME": "PARKING VALET",
        "ATTR": "ATTRIBUTES_PARKING_VALET"
    }, ];

    $scope.gooodfor_attributes = [{
        "NAME": "GROUPS",
        "ATTR": "ATTRIBUTES_GOODFOR_GROUPS"
    }, {
        "NAME": "KIDS",
        "ATTR": "ATTRIBUTES_GOODFOR_KIDS"
    }, {
        "NAME": "LATENIGHT",
        "ATTR": "ATTRIBUTES_GOODFOR_LATENIGHT"
    }, {
        "NAME": "BRUNCH",
        "ATTR": "ATTRIBUTES_GOODFOR_BRUNCH"
    }, {
        "NAME": "BREAKFAST",
        "ATTR": "ATTRIBUTES_GOODFOR_BREAKFAST"
    }, {
        "NAME": "DANCING",
        "ATTR": "ATTRIBUTES_GOODFOR_DANCING"
    }, {
        "NAME": "LUNCH",
        "ATTR": "ATTRIBUTES_GOODFOR_LUNCH"
    }, {
        "NAME": "DESSERT",
        "ATTR": "ATTRIBUTES_GOODFOR_DESSERT"
    }, {
        "NAME": "DINNER",
        "ATTR": "ATTRIBUTES_GOODFOR_DINNER"
    }];

    $scope.restaurant_attributes = [{
        "NAME": "SOYFREE",
        "ATTR": "ATTRIBUTES_DIETARY_SOYFREE"
    }, {
        "NAME": "VEGETARIAN",
        "ATTR": "ATTRIBUTES_DIETARY_VEGETARIAN"
    }, {
        "NAME": "VEGAN",
        "ATTR": "ATTRIBUTES_DIETARY_VEGAN"
    }, {
        "NAME": "DAIRYFREE",
        "ATTR": "ATTRIBUTES_DIETARY_DAIRYFREE"
    }, {
        "NAME": "HALAL",
        "ATTR": "ATTRIBUTES_DIETARY_HALAL"
    }, {
        "NAME": "GLUTENFREE",
        "ATTR": "ATTRIBUTES_DIETARY_GLUTENFREE"
    }, {
        "NAME": "KOSHER",
        "ATTR": "ATTRIBUTES_DIETARY_KOSHER"
    }, {
        "NAME": "CATERS",
        "ATTR": "ATTRIBUTES_CATERS"
    }, {
        "NAME": "ORDER AT COUNTER",
        "ATTR": "ATTRIBUTES_ORDER_AT_COUNTER"
    }, {
        "NAME": "DRIVE THRU",
        "ATTR": "ATTRIBUTES_DRIVETHRU"
    }, {
        "NAME": "BYOB",
        "ATTR": "ATTRIBUTES_BYOB"
    }, {
        "NAME": "ALCOHOL",
        "ATTR": "ATTRIBUTES_ALCOHOL"
    }, {
        "NAME": "CORKAGE",
        "ATTR": "ATTRIBUTES_CORKAGE"
    }, {
        "NAME": "WAITER SERVICE",
        "ATTR": "ATTRIBUTES_WAITERSERVICE"
    }, {
        "NAME": "BYOB CORKAGE",
        "ATTR": "ATTRIBUTES_BYOB_CORKAGE"
    }, {
        "NAME": "TAKEOUT",
        "ATTR": "ATTRIBUTES_TAKEOUT"
    }];
    $scope.music_attributes = [{
        "NAME": "DJ",
        "ATTR": "ATTRIBUTES_MUSIC_DJ"
    }, {
        "NAME": "JUKEBOX",
        "ATTR": "ATTRIBUTES_MUSIC_JUKEBOX"
    }, {
        "NAME": "LIVE",
        "ATTR": "ATTRIBUTES_MUSIC_LIVE"
    }, {
        "NAME": "BACKGROUND",
        "ATTR": "ATTRIBUTES_MUSIC_BACKGROUND"
    }, {
        "NAME": "KARAOKE",
        "ATTR": "ATTRIBUTES_MUSIC_KARAOKE"
    }, {
        "NAME": "VIDEO",
        "ATTR": "ATTRIBUTES_MUSIC_VIDEO"
    }];

    $scope.ambience_attributes = [{
        "NAME": "CASUAL",
        "ATTR": "ATTRIBUTES_AMBIENCE_CASUAL"
    }, {
        "NAME": "ROMANTIC",
        "ATTR": "ATTRIBUTES_AMBIENCE_ROMANTIC"
    }, {
        "NAME": "UPSCALE",
        "ATTR": "ATTRIBUTES_AMBIENCE_UPSCALE"
    }, {
        "NAME": "DIVEY",
        "ATTR": "ATTRIBUTES_AMBIENCE_DIVEY"
    }, {
        "NAME": "CLASSY",
        "ATTR": "ATTRIBUTES_AMBIENCE_CLASSY"
    }, {
        "NAME": "TOURISTY",
        "ATTR": "ATTRIBUTES_AMBIENCETOURISTY"
    }, {
        "NAME": "HIPSTER",
        "ATTR": "ATTRIBUTES_AMBIENCE_HIPSTER"
    }, {
        "NAME": "TRENDY",
        "ATTR": "ATTRIBUTES_AMBIENCE_TRENDY"
    }];

    $scope.uncheckAll = function() {
        $scope.checked.food_attributes_checked = [];
        $scope.checked.music_attributes_checked = [];
        $scope.checked.ambience_attributes_checked = [];
        $scope.checked.misc_attributes_checked = [];
        $scope.checked.hair_attributes_checked = [];
        $scope.checked.gooodfor_attributes_checked = [];
        $scope.radio_attributes.noise = "";
        $scope.radio_attributes.attire = "";
        $scope.radio_attributes.price = "";
        $scope.radio_attributes.age = "";
        $scope.radio_attributes.wifi = "";
    };

    $scope.toggleCollapsed = function() {
        $scope.isCollapsed = !$scope.isCollapsed;

    }
    $scope.search = function() {
        var searchArray = [];
        searchArray = searchArray.concat($scope.checked.food_attributes_checked);
        searchArray = searchArray.concat($scope.checked.music_attributes_checked);
        searchArray = searchArray.concat($scope.checked.ambience_attributes_checked);
        searchArray = searchArray.concat($scope.checked.misc_attributes_checked);
        searchArray = searchArray.concat($scope.checked.hair_attributes_checked);
        searchArray = searchArray.concat($scope.checked.gooodfor_attributes_checked);
        searchArray.push("radio_attributes.noise=" + $scope.radio_attributes.noise);
        searchArray.push("radio_attributes.attire=" + $scope.radio_attributes.attire);
        searchArray.push("radio_attributes.price=" + $scope.radio_attributes.price);
        searchArray.push("radio_attributes.age=" + $scope.radio_attributes.age);
        searchArray.push("radio_attributes.wifi=" + $scope.radio_attributes.wifi);
        if (angular.isUndefined($rootScope.findString)) {
            $rootScope.findString = "Food";
        }
        //console.log($scope.radio_attributes.wifi);
        var url = 'http://localhost:8080/demoproject/webapi/business/business_search/' + $rootScope.searchCities + '/' + $rootScope.findString;
        console.log(url);
        var searchParams = searchArray.join();
        console.log(searchParams);
        $http.get(url, {
            params: {
                searchParams
            }
        }).success(function(data) {
            if (data.length > 0){
                $scope.isDataFound = true;
            }
                $scope.BusinessList = data;



        }).error(function(data) {
            $scope.BusinessList = data;
        });
    }

    $scope.openBusinessProfile = function(businessId) {
        console.log(businessId);
        $state.go('businessProfile', {
            businessID: businessId
        });
    }


    $scope.$on('eventName', function(event, args) {
        $scope.message = args.message;
        console.log($scope.message);
        $scope.search();
    });

    $scope.search();
});
