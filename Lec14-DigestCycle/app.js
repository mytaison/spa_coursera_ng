(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope','$timeout'];
function CounterController($scope,$timeout) {
  $scope.onceCounter = 0;
  $scope.counter = 0;
  $scope.name = "BlueMegamind";
  // Manual Process
  // $scope.$watch('onceCounter' , function(newValue , oldValue){
  //   console.log("Once Counter old value: " + oldValue)
  //   console.log("Once Counter new value: " + newValue)
  // })
  //Auto
  $scope.$watch(function(){
    console.log("Digest Loop Fired!!");
  })
  $scope.countOnce = function(){
    $scope.onceCounter = 1;
  }
  $scope.upCounter = function(){
    // setTimeout(function(){
    //   $scope.counter += 1;
    //   $scope.$apply(function(){
    //     console.log("Counter incremented");
    //   })
    // },2000)
    $timeout(function(){
      $scope.counter += 1;
        console.log("Counter incremented");
    },2000)
  }
  $scope.showNumberOfWatchers = function () {
    console.log("No of watchers count: "+$scope.$$watchersCount);
  };

}

})();
