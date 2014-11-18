'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('angularjsTutorial'));

  beforeEach(inject(function($rootScope) {
  	scope = $rootScope.$new();
  }));

  it('should define more than 5 awesome things', inject(function($controller) {
    var ctrl = {};
      expect(ctrl.awesomeThings).toBeUndefined();

    ctrl = $controller('MainCtrl', {
      //$scope: scope
    });

    expect(angular.isArray(ctrl.awesomeThings)).toBeTruthy();
    expect(ctrl.awesomeThings.length > 5).toBeTruthy();
  }));
});
