(function () {
'use strict';

var shoppingList = ["milk" , "milk biscuit", "chocolate biscuit", "chocolate"]
angular.module('MsgApp', [])
.controller('MsgController', MsgController)
MsgController.$inject = ['$scope'];

function MsgController($scope) {
  $scope.name = "Mehedi";
  $scope.shoppingList = shoppingList;

}


})();

