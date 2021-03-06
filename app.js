var businessApp = angular.module('businessApp', ['ui.router', 'ui.bootstrap', 'nvd3','checklist-model','ngAnimate']);

businessApp.run(function($rootScope) {
    $rootScope.isHome = true;
});

businessApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    .state('home', {
        url: '/home',
        templateUrl: 'modules/partial-home.html'
    })

    .state('reviewerHome', {
        url: '/reviewerHome',
        templateUrl: 'modules/reviewer_home.html',
        controller: 'reviewerHomeController'
    })

    .state('reviewerProfile', {
        url: '/reviewerProfile',
        templateUrl: 'modules/userProfile.html',
        params: {
            userID: null
        }
    })

    .state('businessHome', {
        url: '/businessHome',
        templateUrl: 'modules/businessHome.html',

    })
        .state('businessProfile', {
            url: '/businessProfile',
            templateUrl: 'modules/businessProfile.html',
            params: {
                businessID: null
            }

        })
    .state('trendsHome', {
        url: '/trendsHome',
        templateUrl: 'modules/trendsHome.html',

    })
    .state('businessFilter', {
        url: '/businessFilter',
        templateUrl: 'modules/businessFilter.html',

    })
});
