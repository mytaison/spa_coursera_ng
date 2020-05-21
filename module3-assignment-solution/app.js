(function(){
    "use strict";
    angular.module("NarrowItDownApp",[])
    .controller("NarrowItDownController" , NarrowItDownController)
    .service("MenuSearchService" , MenuSearchService)
    .directive("foundItems" , foundItems)
    .directive("loadingScreen" , loadingScreen)
    .constant("apiBasePath" , "https://davids-restaurant.herokuapp.com")
    
    //Controller
    NarrowItDownController.$inject = ["MenuSearchService"]
    function NarrowItDownController(MenuSearchService){
        var ndc = this;
        ndc.searchKeyword = "";
        ndc.foundItems =[];
        ndc.title = "Menu Items";
        ndc.error = false;
        ndc.loading = false;
        ndc.narrowItDownBtnCallback = function(){
            ndc.loading = true;
            ndc.error = false;
            ndc.foundItems =[];
            console.log("Button Clicked");
            let menuItemsPromise = MenuSearchService.getMenuItems(ndc.searchKeyword);
            menuItemsPromise
            .then(items => {
                // console.log("Items",items)
                ndc.foundItems = items;
                ndc.loading = false;
            })
            .catch(error=>{
                // console.log(error);
                ndc.error = true;
                ndc.loading = false;
            })
            
        }
        ndc.removeItem = function(index){
            ndc.foundItems.splice(index,1);
        }
    }
    //Service
    MenuSearchService.$inject=["$q","$http","apiBasePath"]
    function MenuSearchService($q,$http,apiBasePath){
        var service = this;
        var menuItems = "";
        var foundItems = [];
        service.getMenuItems = function(searchKeyword){
            var deferred = $q.defer();
            var response = $http({
                method: "GET",
                url: (apiBasePath + "/menu_items.json"),
              }).then(function(result){
                menuItems = result.data;
                console.log(menuItems);
                service.getMatchedMenuItems(searchKeyword,deferred);
              })
            return deferred.promise;  
        }

        service.getMatchedMenuItems = function(targetKeyword,deferred){
            foundItems = [];
            if(targetKeyword == ""){
                deferred.reject("Nothing found");
            }else{
                menuItems.menu_items.map( (x,index) => {
                    if( x.description.includes(targetKeyword)){
                        console.log("Found!");
                        foundItems.push(x)
                    }
                    if(menuItems.menu_items.length == index+1){
                        console.log("foundItems",foundItems)
                        deferred.resolve(foundItems);
                    }
                })
            }
        }
    }

    //Directive
    function foundItems(){
        var ddo = {
            restrict: 'E',
            templateUrl: 'foundItems.html',
            scope: {
                title: '@',
                foundItems: '<',
                onRemove: '&',
                error: '<',
                loading: '<'
              },
              controller: foundItemsController,
              controllerAs: 'list',
              bindToController: true,
          };
          return ddo;
    }
    function foundItemsController(){
        var list = this;
    }
    function loadingScreen(){
        var ddo={
            template: '<div class="loader"></div>'
            // templateUrl: 'loader/itemsloadingindicator.template.html'
        }
        return ddo;
    }
})();