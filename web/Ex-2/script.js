var app = angular.module("myApp", []);

app.controller("DirectiveController",['$scope',function($scope){
 $scope.user = {
 companyName : "Coolest Company on Earth",
 companyUrl : "http://www.cool.cooler.com",
 created : new Date()
 };
}])
    .directive("formatCompany", function() {
        return {
            restrict: 'EA',
            template: '<div style="max-width: 300px; margin: 5px; border:1px solid blue">\
                        <p>Company: {{user.companyName}}</p>\
                        <p>URL: <a href="{{user.companyUrl}}">Visit us</a></p>\
                        <p>Created: {{user.created}}</p></div>'
        };
});

app.directive("loadPictures", [function() {
    return {
      restrict: "EA",
      link: function(scope, element, attrs) {
          var attributeParts = attrs.loadPictures.split(',');
          console.log("AttributeParts " + attributeParts);
          var html = "";
          for (var i = 0; i < attributeParts.length; i++) {
              var dir = "../pictures/" + attributeParts[i] + ".png";
              console.log("Image dir: " + dir);
              element[0].innerHTML += "<img src=" + dir + "></img>";
          }
      }
    }; 
}]);

