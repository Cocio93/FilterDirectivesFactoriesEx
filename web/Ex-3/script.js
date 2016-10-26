var app = angular.module("myApp", []);

app.controller("MyController",['$scope',function($scope, RandomService){
        $scope.randomNumber = function (n) {
            return Math.floor((Math.random() * n) + 1);
        };
        
        $scope.randomString = function (n) {
          return new Array(n+1).join((Math.random().toString(36)+'00000000000000000').slice(2, 18)).slice(0, n)  
        };
}]);

app.service("RandomService", function() {
    this.getRandomNumber = function(n) {
        return Math.floor((Math.random() * n) + 1);
    };
    
    this.getRandomString = function(n) {
        return new Array(n+1).join((Math.random().toString(36)+'00000000000000000').slice(2, 18)).slice(0, n);
    };
});