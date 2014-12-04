'use strict';

describe('TodoService', function(){

  var TodoService, $timeout;

  beforeEach(module('angularjsTutorial'));

  beforeEach(inject(function (_TodoService_, _$timeout_) {
    TodoService = _TodoService_;
    $timeout = _$timeout_;
  }));

  describe('#getTodos', function(){
    it('should return an array', function(done) {
        TodoService.getTodos()
            .then(function(todos){
                expect(angular.isArray(todos)).toBeTruthy();
            })
            .finally(function(){
                done();
            });
            // Include 1 timeout.flush() call for every async+timeout operation we called
            $timeout.flush();
        });
    });

    describe('#addTodo', function(){
        it('should be able to add a todo and return the newly created todo', function(done) {
            TodoService.addTodo({
                title : 'test title 1'
            })
            .then(function(newTodo){
                console.log('then #1');
                expect(newTodo).toBeDefined();
                console.log('got to addTodo handler');
            })
            .then(function(){
                console.log('then #2');
                return TodoService.getTodos();
            })
            .then(function(todos){
                console.log('then #3');
                console.log('got to getTodos handler');
                expect(todos.length === 1).toBeTruthy();
            })
            .finally(function(){
                console.log('finally');
                done();
            });
            // Include 1 timeout.flush() call for every async+timeout operation we called
            $timeout.flush();
            $timeout.flush();
        });
        it('should create "title" and "completed" properties on todos', function(done) {
            TodoService.addTodo({
                title : 'test title 2'
            })
            .then(TodoService.getTodos)
            .then(function(todos){
                expect(todos.length === 1).toBeTruthy();
                expect(todos[0].title).toBeDefined();
                expect(todos[0].completed).toBeDefined();
                expect(todos[0].completed).toBe(false);
            })
            .finally(done);
            // Include 1 timeout.flush() call for every async+timeout operation we called
            $timeout.flush();
            $timeout.flush();
        });
    });

    describe('#removeTodoById', function(){
        it('should be able to remove a todo by id', function(done) {
            var title = 'test title 3',
                newTodo;
            TodoService.addTodo({
                title : title
            })
            .then(function(newTodoResult){
                newTodo = newTodoResult;
            })
            .then(TodoService.getTodos)
            .then(function(todos){
                expect(todos.length === 1).toBeTruthy();
            })
            .then(function(){
                return TodoService.removeTodoById(newTodo.id)
            })
            .then(TodoService.getTodos)
            .then(function(todos){
                expect(todos.length === 0).toBeTruthy();
            })
            .finally(done);

            // Include 1 timeout.flush() call for every async+timeout operation we called
            $timeout.flush();
            $timeout.flush();
            $timeout.flush();
            $timeout.flush();
        });
    });
});
