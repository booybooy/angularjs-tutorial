'use strict';

describe('controllers', function(){

  beforeEach(module('angularjsTutorial'));

  it('Should have an array of todos', inject(function($controller) {
    var main = $controller('MainCtrl', {});
      expect(main.todos).toBeDefined();
  }));

  it('Should have added a todo in todos', inject(function($controller) {
    var main = $controller('MainCtrl', {});
    var due = moment().subtract(1, 'days');
    console.log("Due date: " + due);
    main.addTodo({title: "1", desc: "one item", completed: true, dueDate: due});
    expect(main.todos.length).toBe(1);
  }));

  it('Should remove an item', inject(function($controller) {
    var main = $controller('MainCtrl', {});
    var due = moment().subtract(1, 'days').calendar();
    main.addTodo({title: "1", desc: "one item", completed: true, dueDate: due});
    main.removeTodo("1");
    expect(main.todos.length).toBe(0);
  }));

  it('Should have the specified properties', inject(function($controller) {
    var main = $controller('MainCtrl', {});

  }));

});
