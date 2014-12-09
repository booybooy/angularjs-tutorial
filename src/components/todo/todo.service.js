/**
 * Created by bailey on 12/1/2014.
 */

'use strict';
angular.module('angularjsTutorial')
  .constant("firebaseUrl", "https://brilliant-torch-9273.firebaseio.com/")
  .factory('TodoService', ['$window', '$log', '$q', '$firebase', 'firebaseUrl',
    function ($window, $log, $q, $firebase, firebaseUrl) {

      $log.log('TodoService instantiated');
      var firebaseReference = new Firebase(firebaseUrl + 'todos');
      var firebaseSync = $firebase(firebaseReference);
      var todos;

      return {
        getTodos: function () {
          $log.log("Retrieving todos.");
          var deferred = $q.defer();

          firebaseSync.$asArray().$loaded().then(function(response) {
            todos = response;
            deferred.resolve(todos);
            console.log("todos loaded: ", todos === response, response);
          }).catch(function(err) {
            console.log("Error retrieving todos from firebase", err);
          });

          return deferred.promise;
        },
        addTodo: function (todo) {
          var deferred = $q.defer();
            var newTodo = {
              id: Date.now().toString() + Math.random(),
              title: todo.title,
              completed: false
            };
            todos.$add(newTodo).then(function(newTodoRef) {
              $log.log("newTodo added: ", newTodoRef.$id, newTodoRef.key(), newTodoRef, todos);
              deferred.resolve(newTodoRef);
            }).catch(function(err) {
              $log.log("Eror adding todo: ", err);
              deferred.reject(err);
            });
          return deferred.promise;
        },
        removeTodo : function(todo){
          var deferred = $q.defer();
          todos.$remove(todo).then(function(todoRef){
            $log.log('resolving removeTodo promise');
            deferred.resolve(todoRef);
          })
          .catch(function(err){
            $log.log('error removing todo', err);
            $log.log('rejecting removeTodo promise');
            deferred.reject(err);
          });
          return deferred.promise;
        },
        saveTodo : function(todo){
          var deferred = $q.defer();
          todos.$save(todo).then(function(todoRef){
            $log.log('resolving saveTodo promise');
            deferred.resolve(todoRef);
          })
          .catch(function(err){
            $log.log('error saving todo', err);
            $log.log('rejecting saveTodo promise');
            deferred.reject(err);
          });

          return deferred.promise;
        }
      };
    }]);
