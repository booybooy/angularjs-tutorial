'use strict';

var app = angular.module('angularjsTutorial', ['ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router',
  'ngTable', 'effects', 'firebase'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl as mainCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactCtrl as contactCtrl'
      })

    ;

    $urlRouterProvider.otherwise('/');
  });

angular.module('effects', ['ngAnimate'])
  .animation('.slide-up', function() {
    return {
      enter: function(element, done) {
        console.log("In enter!!!!!!");
        $(element)
          .hide()
          .slideDown(400, done);

        return function(cancel) {
          if(cancel) {
            element.stop();
          }
        };
      },
      leave: function(element, done) {
        $(element)
          .children('td')
          .animate({
            padding: 0
          })
          .wrapInner('<div />')
          .children()
          .slideUp(done);

        return function(cancel) {
          if(cancel) {
            element.stop();
          }
        };
      }
    };
});
