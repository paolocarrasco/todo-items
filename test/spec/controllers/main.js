'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('todoItemsUiApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of todo items to the scope', function () {
    expect(scope.todos.length).toBe(3);
  });

  describe('#addTodo', function () {
    it('should add an item into the list', function () {
      scope.todo = 'Daysy';
      scope.addTodo();
      expect(scope.todos.length).toBe(4);
    });
  });

  describe('#removeTodo', function () {
    it('should remove the selected item from the list', function () {
      scope.removeTodo(2);
      expect(scope.todos.length).toBe(2);
    });
  });
});
