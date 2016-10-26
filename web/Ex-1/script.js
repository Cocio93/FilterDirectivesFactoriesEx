var app = angular.module("myApp", []);

app.controller('MyController', [function(){
var self = this;
self.persons = [
{name: 'Hans', gender: 'male', age: 8}, {name: 'Grethe', gender: 'female', age: 7},
{name: 'Frederik', gender: 'male', age: 61}, {name: 'Hassan', gender: 'male', age: 13},
{name: 'Karen', gender: 'female', age: 31} ];
}]);

app.filter("schoolAge", function() {
   return function(items) {
       var filtered = [];
       for (var i = 0; i < items.length; i++) {
           var item = items[i];
           if (item.age > 5 && item.age < 16) {
               filtered.push(item);
           }
       }
       return filtered;
   };
});