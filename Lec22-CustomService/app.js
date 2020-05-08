(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListAddController', ShoppingListAddController)
.controller('ShoppingListShowController', ShoppingListShowController)
.controller('ShoppingListController', ShoppingListController)
.service('ShoppingListService', ShoppingListService)
// implementing a service using a factory 
.factory('ShoppingListServiceFactory', ShoppingListServiceFactory)
;
// Using Service module
ShoppingListAddController.$inject = ['ShoppingListService'];
function ShoppingListAddController(ShoppingListService) {
  var itemAdder = this;

  itemAdder.itemName = "";
  itemAdder.itemQuantity = "";
  var slService = ShoppingListService;
  itemAdder.addItem = function () {
    slService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
  }
}

ShoppingListShowController.$inject = ['ShoppingListService'];
function ShoppingListShowController(ShoppingListService) {
  var showList = this;
  var slService = ShoppingListService;
  showList.items = slService.getItems();

  showList.removeItem = function (itemIndex) {
    slService.removeItem(itemIndex);
  };
}

//Using Factory module 
ShoppingListController.$inject = ['ShoppingListServiceFactory']
function ShoppingListController(ShoppingListServiceFactory){
  var list1 = this;
  var shoppingList = ShoppingListServiceFactory(3)
  list1.items = shoppingList.getItems();
  list1.itemName = "";
  list1.itemQuantity = "";
  list1.errorMessage = "";
  list1.addItem = function(){
    try{
      shoppingList.addItem(list1.itemName , list1.itemQuantity);
    }catch(error){
      list1.errorMessage = error.message;
    }
  }
  
  list1.removeItem = function(itemIndex){
    shoppingList.removeItem(itemIndex)
  }
}


function ShoppingListService() {
  var service = this;
  // List of shopping items
  var items = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };
}
function ShoppingListServiceForFactory(maxItems) {
  var serviceX = this;
  // List of shopping items
  var items = [];

  serviceX.addItem = function (itemName , quantity) {
    if ((maxItems === undefined) || (maxItems !== undefined) && (items.length < maxItems)) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);
    }
    else {
      throw new Error("Max items (" + maxItems + ") reached.");
    }
  }

  serviceX.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  serviceX.getItems = function () {
    return items;
  };
}

// implementing service with a factory
function ShoppingListServiceFactory(){
  return function(maxItems){
    return new ShoppingListServiceForFactory(maxItems)
  }
}

})();
