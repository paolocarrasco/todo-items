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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
