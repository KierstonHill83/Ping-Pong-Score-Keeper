var app = angular.module('myApp', []);

app.controller('pingPong', ['$scope', function($scope) {

    $scope.count = 0;
    $scope.count2 = 0;

  $scope.reset = function() {
    $scope.count = 0;
    $scope.count2 = 0;
    $scope.message1 = "";
    $scope.message2 = "";
  };

  $scope.serve = function() {
    if ($scope.count + $scope.count2 < 2) {
      $scope.message1 = "Serving";
      $scope.message2 = "";
    } else if ($scope.count + $scope.count2 < 4) {
      $scope.message2 = "Serving";
      $scope.message1 = "";
    } else if ($scope.count + $scope.count2 < 6) {
      $scope.message1 = "Serving";
      $scope.message2 = "";
    } else if ($scope.count + $scope.count2 < 8) {
      $scope.message2 = "Serving";
      $scope.message1 = "";
    } else if ($scope.count + $scope.count2 < 10) {
      $scope.message1 = "Serving";
      $scope.message2 = "";
    } else if ($scope.count + $scope.count2 < 12) {
      $scope.message2 = "Serving";
      $scope.message1 = "";
    } else if ($scope.count + $scope.count2 < 14) {
      $scope.message1 = "Serving";
      $scope.message2 = "";
    } else if ($scope.count + $scope.count2 < 16) {
      $scope.message2 = "Serving";
      $scope.message1 = "";
    } else if ($scope.count + $scope.count2 < 18) {
      $scope.message1 = "Serving";
      $scope.message2 = "";
    } else if ($scope.count + $scope.count2 < 20) {
      $scope.message2 = "Serving";
      $scope.message1 = "";
    } else if ($scope.count + $scope.count2 < 22) {
      $scope.message1 = "Serving";
      $scope.message2 = "";
    }
  };

}]);
