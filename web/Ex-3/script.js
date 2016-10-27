var app = angular.module("myApp", []);

app.controller("MyController", function($scope, randomService){
        $scope.randomNumber = function (n) {
            return randomService.getRandomNumber(n);
        };
        
        $scope.randomString = function (n) {
          return randomService.getRandomString(n);
        };
});

app.service("randomService", function() {
    this.getRandomNumber = function(n) {
        return Math.floor((Math.random() * n) + 1);
    };
    
    this.getRandomString = function(n) {
        return new Array(n+1).join((Math.random().toString(36)+'00000000000000000').slice(2, 18)).slice(0, n);
    };
});