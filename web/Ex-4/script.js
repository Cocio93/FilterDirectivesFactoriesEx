var app = angular.module("myApp", []);

app.controller("MyController", function ($scope, countryFactory) {
    countryFactory.allCountries(function(countryFactory) {
       $scope.allCountries = countryFactory; 
    });
//    
//    countryFactory.countriesByRegion("europe", function(countryFactory) {
//       $scope.africa = countryFactory; 
//    });


});

app.factory("countryFactory", function ($http) {
    return {
      allCountries: function(callback) {
          $http.get("https://restcountries.eu/rest/v1/all").success(callback);
      },
      
      countriesByRegion: function(region) {
          return $http.get("https://restcountries.eu/rest/v1/region/" + region).success();
      }
    };
});