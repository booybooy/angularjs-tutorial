'use strict';

describe('controllers', function () {
  var scope, q;

  beforeEach(module('angularjsTutorial'));

  beforeEach(inject(function ($rootScope, $q) {
    scope = $rootScope.$new();
    q = $q;
  }));

  it('Should have an array of todos', inject(function ($controller) {
    var main = $controller('MainCtrl', {$scope: scope, $q: q});
    expect(main.todos).toBeDefined();
  }));

  it('should be able to add a todo and return the newly created todo', inject(function($controller) {
    var mainCtrl = $controller('MainCtrl', {
      $scope : scope
    });

    var newTodo = mainCtrl.addTodo({
      title : 'test title'
    });

    expect(mainCtrl.todos.length === 1).toBeTruthy();
    expect(newTodo).toBeDefined();
  }));

  it('should be able to remove a todo by id', inject(function($controller) {
    var mainCtrl = $controller('MainCtrl', {
      $scope : scope
    });

    var title = 'test title';

    var newTodo = mainCtrl.addTodo({
      title : title
    });

    expect(mainCtrl.todos.length === 1).toBeTruthy();

    mainCtrl.removeTodo(newTodo);

    expect(mainCtrl.getTodos().length === 0).toBeTruthy();
  }));

  it('Should have the specified properties', inject(function ($controller) {
    var main = $controller('MainCtrl', {$scope: scope, $q: q});

  }));

});
