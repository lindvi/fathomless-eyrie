'use strict';

angular.module('angularFApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController'
    }).controller('MainController', ['$scope', '$http', '$state', function($scope, $http, $state) {
        $scope.signup = false;
        $scope.state = 0;

        $scope.sendData = {
          first_name: '',
          last_name: '',
          ssn: '',
          email: ''
        };

        $scope.go = function() {
          $scope.state = 1;
        }


        $scope.submit = function() {
          $http.post('/api/things', $scope.sendData)
          .success(function(res) {
            console.log('test');
            $scope.state = 2;
          })
          .error(function(res) {
            console.log('fail');
          })
        }
      }]);
