'use strict';

angular.module('angularjsTutorial')
    .controller('MainCtrl', ['$scope', '$q', '$filter', 'TodoService', 'ngTableParams',
      function ($scope, $q, $filter, TodoService, ngTableParams) {
        console.log("MainCtrl instantiated.");

        var self = this;
        self.newTodoTitle = "";
        self.todos = [];

        self.getTodos = function(){
          return TodoService.getTodos().then(function(todos){
            self.todos = todos;
            return self.todos;
          });
        };

        self.addTodo = function(options){
          var newTodo;
          return TodoService.addTodo(options).then(function(newTodoResult){
            newTodo = newTodoResult;
          }, function(err){
            console.log(err);
          });
        };

        self.removeTodo = function(todo){
          return TodoService.removeTodo(todo);
        };

        self.saveTodo = function(todo){
          return TodoService.saveTodo(todo);
        };

        self.getCompletedStyle = function (completed) {
          return completed ? "text-success" : "text-danger";
        };

        self.getTodos();

        self.tableParams = new ngTableParams({
          sorting: {dueDate: 'desc'}
        }, {
          total: self.todos.length, // length of data
          getData: function ($defer, params) {
            var orderedData = params.sorting()
                ? $filter('orderBy')(self.todos, params.orderBy())
                : self.todos;
            $defer.resolve(orderedData);
          }
        });

        $scope.$watch(function () {
              return self.todos;
            },
            function (newVal, oldVal) {
              console.log("new value: " + newVal + ", old value: " + oldVal);
              console.log("TODOs: " + self.todos);
              self.tableParams.reload();
            }, true);
      }]);
