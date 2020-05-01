// DEPENDENCY INJECTION IS A DESIGN PATTERN THAT IMPLEMENTS "INVERSION OF CONTROL" FOR RESOLVING DEPENDENCIES

(function(){
    'use strict';
})();

angular.module('DI_App' , [])
.controller('DI_Controller' , DI_Controller)

function DI_Controller($scope , $filter , $injector){
    $scope.name="Mehedi";
    $scope.upper = function(){
        // Filter Function Injected
        var upCase = $filter('uppercase')
        $scope.name = upCase($scope.name)
    }
    function annotateMe(name , job, blah){
        return "Blah!";
    }
    console.log(annotateMe());
    console.log($injector.annotate(DI_Controller));
}