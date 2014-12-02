'use strict';

angular.module('angularjsTutorial')
  .controller('MainCtrl', ['$scope', '$filter', 'TodoService', 'ngTableParams',
    function($scope, $filter, TodoService, ngTableParams) {
    console.log("MainCtrl instantiated.");

    var self = this;
    self.newTodoTitle = "";

    self.addTodo = function(todo) {
      self.newTodoTitle = "";
      todo.dueDate = new Date();
      TodoService.addTodo(todo);
    };
    self.removeTodo = function(todo) {
      TodoService.removeTodo(todo);
    };
    self.getCompletedStyle = function(completed) {
      return completed ? "text-success" : "text-danger";
    };

    self.tableParams = new ngTableParams({
      sorting: {dueDate : 'desc'}
    }, {
      total: TodoService.getTodos().length, // length of data
      getData: function($defer, params) {
        var orderedData = params.sorting()
            ? $filter('orderBy')(TodoService.getTodos(), params.orderBy())
            : TodoService.getTodos();
        $defer.resolve(orderedData);
      }
    });

    $scope.$watch(function() { return TodoService.getTodos(); },
      function(newVal, oldVal){
        console.log("new value: " + newVal + ", old value: " + oldVal);
        console.log("TODOs: " + TodoService.getTodos());
        self.tableParams.reload();
      }, true);
  }]);
