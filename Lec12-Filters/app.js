(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('custom' , customFilterFactory)
.filter('custom2' , custom2FilterFactory);
MsgController.$inject = ['$scope', '$filter' , 'customFilter' , 'custom2Filter'];

function MsgController($scope, $filter , customFilter , custom2Filter) {
  $scope.name = "Yaakov";
  $scope.stateOfBeing = "hungry";
  $scope.cookieCost = 0.45;

  $scope.sayMessage = function () {
    var msg = "Yaakov likes to eat healthy snacks at night!";
    // var output = $filter('uppercase')(msg);
    var output = customFilter(msg)
    return output;
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}

function customFilterFactory(){
  return function(input){
    return input+"Filter";
  }
}
function custom2FilterFactory(){
  return function(input , target , replace ){
    return input.replace(target , replace)
  }
}

})();

// FOR CUSTOM FILTERS WE NEED TO CREATE CUSTOM FILTER FACTORY AND NEED TO REGISTER IT IN CONTROLLER USING .controller().filter(nameOfFilter , nameOfFilterFactoryFunction)
// THEN WE NEED TO INJECT WITH  (nameOfFilter)Filter

// PASSING ARGUMENTS IN THE FILTER
//EXAMPLE : customFilter(msg , ARG1 , ARG2)
// IN HTML {{  value | custom: ARG1 : ARG2 }}
// IN HTML, FOR CHAINNING {{ value | custom | custom2 }}

