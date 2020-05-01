(function(){
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckCtrl' , [ '$scope' , LunchCheck])
    function LunchCheck($scope){
        var lunchItemsArray =[]; 
        $scope.lunchItems = "";
        $scope.lunchItemsStyle = "has-feedback";
        $scope.lunchItemsCheckStyle = "itemCheckMsg";
        $scope.lunchItemsCheckMsg = "";
    
        $scope.checkLunchItems = function(){
            if($scope.lunchItems != ""){
                lunchItemsArray = $scope.lunchItems.split(",")
            }
            console.log(lunchItemsArray.length);
            console.log(lunchItemsArray);
            if(lunchItemsArray.length > 3){
                $scope.lunchItemsCheckMsg = "Too Much!";
                $scope.lunchItemsStyle = "has-success has-feedback";
                $scope.lunchItemsCheckStyle = "itemCheckMsg green";
            }else if (lunchItemsArray.length > 0 && lunchItemsArray.length <= 3){
                $scope.lunchItemsCheckMsg = "Enjoy!";
                $scope.lunchItemsStyle = "has-success has-feedback";
                $scope.lunchItemsCheckStyle = "itemCheckMsg green";
            }else{
                $scope.lunchItemsCheckMsg = "Please enter data first";
                $scope.lunchItemsStyle = "has-error has-feedback";
                $scope.lunchItemsCheckStyle = "itemCheckMsg red";
            }
        }
        $scope.clearMsgStyle = function(){
            lunchItemsArray = [];
            $scope.lunchItemsStyle = "has-feedback";
            $scope.lunchItemsCheckStyle = "itemCheckMsg";
            $scope.lunchItemsCheckMsg = "";
        }
        
    }
})()