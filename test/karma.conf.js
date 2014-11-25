'use strict';

module.exports = function(config) {

  config.set({
    basePath : '..', //!\\ Ignored through gulp-karma //!\\

    files : [ //!\\ Ignored through gulp-karma //!\\
        'bower_components/angular/angular.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js',
      //  'bower_components/angular-mocks/angular-mocks.js',
      //  'bower_components/angular-animate/angular-animate.js',
      //'bower_components/angular-cookies/angular-cookies.js',
        'bower_components/angular-*/angular*.js',
        'bower_components/moment/moment.js',
        'src/**/*.js',
        'test/unit/**/*.js'
    ],

    autoWatch : false,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
        'karma-phantomjs-launcher',
        'karma-jasmine'
    ]
  });

};
