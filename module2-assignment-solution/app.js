(function(){
    'use strict';
    angular.module('ShoppingListCheckOff' , [])
    .controller('ToBuyController' , ToBuyController)
    .controller('AlreadyBoughtController' , AlreadyBoughtController)
    .service('ShoppingListCheckOffService' , ShoppingListCheckOffService)

    ToBuyController.$inject = ['ShoppingListCheckOffService']
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']

    
    //Service 
    function ShoppingListCheckOffService(){
        var service = this;
        var toBuyItems = [];
        var alreadyBoughtItems = []
        service.getToBuyItems = function(items){
            items.map( x => {
                toBuyItems.push(x)
            })
        }
        service.boughtItem = function(index){
            alreadyBoughtItems.push(toBuyItems[index]);
            toBuyItems.splice(index,1)
        }
        service.currentToBuyItems = function(){
            return toBuyItems;
        }
        service.currentBoughtItems = function(){
            return alreadyBoughtItems;
        }
    }

    // 1st Controller
    function ToBuyController(ShoppingListCheckOffService){
        var tbc = this;
        var toBeBoughtItems = [ 
            { name: "Chips" , quantity: "3" },
            { name: "Cookies" , quantity: "8" },
            { name: "Chocolates" , quantity: "7" },
            { name: "Cakes" , quantity: "5" },
            { name: "Noodles" , quantity: "2" },
            { name: "Dumplings" , quantity: "10" },
            { name: "Chickens" , quantity: "4" },
        ]
        ShoppingListCheckOffService.getToBuyItems(toBeBoughtItems);
        tbc.toBeBoughtItems = ShoppingListCheckOffService.currentToBuyItems()
        tbc.buyItem = function(index){
            ShoppingListCheckOffService.boughtItem(index)
        }
    }
    // 2nd Controller
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var abc = this;
        abc.boughtItems = [];
        abc.boughtItems = ShoppingListCheckOffService.currentBoughtItems()
    }
    
})();