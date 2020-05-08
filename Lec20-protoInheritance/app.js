// Prototypal Inheritance

(function () {
'use strict';
var parent = {
  value : "parentValue",
  obj: {
    objValue : "parentValueObj"
  },
  walk : function(){
    console.log("Walking");
  }
}
var child = Object.create(parent);
console.log("CHILD -> child.value: " , child.value);
console.log("CHILD -> child.obj.objValue: " , child.obj.objValue);
console.log("PARENT -> parent.value: " , parent.value);
console.log("PARENT -> parent.obj.objValue: " , parent.obj.objValue);
console.log("CHILD: " , child );
console.log("PARENT: " , parent )
child.value = "childValue";
child.obj.objValue = "childValueObj";
console.log("CHILD -> child.value: " , child.value);
console.log("CHILD -> child.obj.objValue: " , child.obj.objValue);
console.log("PARENT -> parent.value: " , parent.value);
console.log("PARENT -> parent.obj.objValue: " , parent.obj.objValue);
console.log("parent.obj if equals child.obj" , child.obj === parent.obj);
var grandChild = Object.create(child);
console.log("grandChild: ", grandChild);
grandChild.walk();
// Here javascript walks prototype chain bring the parent's value of objects not the masking value of objects of child, but it brings child's values of properties, it is called prototypal inheritance

//Now Function constructors
function Dog(name){
  this.name = name;
  console.log("this is " , this)
}

var myDog = new Dog("max");
console.log("my dog: " , myDog)

//not being used as functional constructor will not work with angular, try console directly
// Dog("max2");

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
MsgController.$inject = ['$scope'];

function MsgController($scope) {
  $scope.name = "Mehedi";

}


})();

