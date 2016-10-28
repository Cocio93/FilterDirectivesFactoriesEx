var app = angular.module("myApp", []);

app.controller("MyController", ['$scope', 'countryFactory', function ($scope, countryFactory) {
        $scope.allCountries = [];
        countryFactory.allCountries().success(function (data) {
            $scope.allCountries = data;
        });

        $scope.africa = [];
        countryFactory.countriesByRegion("africa").success(function (data) {
            $scope.africa = data;
        });

        $scope.europe = [];
        countryFactory.countriesByRegion("europe").success(function (data) {
            $scope.europe = data;
        });

        $scope.asia = [];
        countryFactory.countriesByRegion("asia").success(function (data) {
            $scope.asia = data;
        });
    }]);

app.factory("countryFactory", ['$http', function ($http) {
        return {
            allCountries: function () {
                return $http({
                    url: 'https://restcountries.eu/rest/v1/all',
                    method: 'get'
                });
            },
            countriesByRegion: function (region) {
                return $http({
                    url: 'https://restcountries.eu/rest/v1/region/' + region,
                    method: 'get',
                });
            }};
    }]);