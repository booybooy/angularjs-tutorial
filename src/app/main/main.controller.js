'use strict';

angular.module('angularjsTutorial')
  .controller('MainCtrl', function($scope, $filter, ngTableParams) {
    var self = this;
    self.newTodoTitle = "";
    self.todos = [];
    self.addTodo = function(todo) {
      self.newTodoTitle = "";
      todo.dueDate = new Date();
      self.todos.push(todo);
    };
    self.removeTodo = function(todo) {
      var index = self.todos.indexOf(todo);
      self.todos.splice(index, 1);
    };
    self.getCompletedStyle = function(completed) {
      return completed ? "text-success" : "text-danger";
    }

    self.tableParams = new ngTableParams({
      sorting: {dueDate : 'desc'}
    }, {
      total: self.todos.length, // length of data
      getData: function($defer, params) {
        var orderedData = params.sorting() ? $filter('orderBy')(self.todos, params.orderBy()) : self.todos;
        $defer.resolve(orderedData);
      }
    });

    $scope.$watch(function() { return self.todos; },
      function(newVal, oldVal){
        console.log("new value: " + newVal + ", old value: " + oldVal);
        console.log("TODOs: " + self.todos);
        self.tableParams.reload();
      }, true);

    //$scope.$watch(function() { return self.newTodoTitle; },
    //  function(newVal, oldVal){
    //    console.log("new value: " + newVal + ", old value: " + oldVal);
    //    console.log("New todo: " + self.newTodoTitle);
    //  });
  });
