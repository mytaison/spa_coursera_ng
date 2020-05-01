// DI in AngularJS needs to be minification proof
// way 1: Inline Array with function as last element
// way 2: Attach $inject property to function object
// // SAVING INJECTORS FROM MINIFICATION 

// (function(){
//     'use strict';
// })();

// angular.module('DI_App' , [])
// .controller('DI_Controller' , ['$scope' , '$filter' , '$injector' , DI_Controller])

// function DI_Controller($scope , $filter , $injector){
//     $scope.name="Mehedi";
//     $scope.upper = function(){
//         // Filter Function Injected
//         var upCase = $filter('uppercase')
//         $scope.name = upCase($scope.name)
//     }
//     function annotateMe(name , job, blah){
//         return "Blah!";
//     }
//     console.log(annotateMe());
//     console.log($injector.annotate(DI_Controller));
// }

//After minified above code
// function DI_Controller(o,e,l){o.name="Mehedi",o.upper=function(){var l=e("uppercase");o.name=l(o.name)},console.log("Blah!"),console.log(l.annotate(DI_Controller))}angular.module("DI_App",[]).controller("DI_Controller",["$scope","$filter","$injector",DI_Controller]);

// Alternate way to save injecttion
// (function(){
//     'use strict';

//     angular.module('DI_App' , [])
//     .controller('DI_Controller' , DI_Controller)
//     DI_Controller.$inject = ['$scope' , '$filter']
//     function DI_Controller($scope , $filter){
//         $scope.name="Mehedi";
//         $scope.upper = function(){
//             // Filter Function Injected
//             var upCase = $filter('uppercase')
//             $scope.name = upCase($scope.name)
//         }
//     }
// })();

!function(){"use strict";function e(e,n){e.name="Mehedi",e.upper=function(){var r=n("uppercase");e.name=r(e.name)}}angular.module("DI_App",[]).controller("DI_Controller",e),e.$inject=["$scope","$filter"]}();