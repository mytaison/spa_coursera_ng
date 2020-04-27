// an Immediately Invoked Function Expression (IIFE)
(function(){
    'use strict'
    angular.module("myFirstApp" , []) //name & dependencies
    .controller('myFirstController', function($scope){
        $scope.name='Mehedi Hasan';
        $scope.sayHello = function(){
            return 'Hello Coursera';
        }
    })
})();