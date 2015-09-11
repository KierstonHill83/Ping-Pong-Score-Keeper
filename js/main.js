var app = angular.module('myApp', []);

app.controller('pingPong', ['$scope', function($scope) {
  $scope.reset = function() {
    $scope.count = 0;
    $scope.count2 = 0;
  };
}]);
