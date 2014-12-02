'use strict';

describe('TodoService', function(){

  var TodoService;

  beforeEach(module('angularjsTutorial'));

  beforeEach(inject(function(_TodoService_) {
    TodoService = _TodoService_;
  }));

  describe('#getTodos', function(){
    it('should return an array', inject(function($controller) {
      expect(angular.isArray(TodoService.getTodos())).toBeTruthy();
    }));
  });
});
