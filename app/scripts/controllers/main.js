'use strict';

/**
 * @ngdoc function
 * @name innovationUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the innovationUiApp
 */
angular.module('innovationUiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });
