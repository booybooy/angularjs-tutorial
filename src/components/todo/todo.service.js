/**
 * Created by bailey on 12/1/2014.
 */

'use strict';
angular.module('angularjsTutorial')
  .factory('TodoService', function() {

    var todos = [];

    return {
      getTodos : function(){
        return todos;
      },
      addTodo : function(todo) {
        todo.dueDate = new Date();
        todos.push(todo);
      },
      removeTodo : function(todo) {
        var index = todos.indexOf(todo);
        todos.splice(index, 1);
      }
    };
  });
