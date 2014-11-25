'use strict';

var app = angular.module('angularjsTutorial', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngTable'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  });

app.controller('GlobalController', function($scope) {
  this.message = "I am GloballController";
});
