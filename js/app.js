(function(){
  'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  //ToBuyController
  ToBuyController.$inject = ['$scope','ShoppingListCheckOffService'];
  function ToBuyController($scope, ShoppingListCheckOffService) {
    var toBuyList = this;
    toBuyList.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

    toBuyList.addToBoughtList = function(itemIndex, item) {
        ShoppingListCheckOffService.addToBoughtList(itemIndex, item);
    }

    $scope.$watch('itemsToBuy');
  }


 //AlreadyBoughtController
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBoughtList = this;
    alreadyBoughtList.itemsAlreadyBought = ShoppingListCheckOffService.getItemsAlreadyBought();
  }

  //service
  function ShoppingListCheckOffService() {
    var service = this;

    // List of shopping items
    var itemsToBuy = [
      {
        name: "Cookies",
        quantity: 10
      } ,
      {
        name: "Pepto Bismol",
        quantity: 3
      } ,
      {
        name: "Sugar Drinks",
        quantity: 5
      } ,
      {
        name: "Coffee",
        quantity: 9
      } ,
      {
        name: "Chips",
        quantity: 4
      }
    ];

    var itemsAlreadyBought = [];

    service.getItemsToBuy = function () {
      return itemsToBuy;
    };

    service.getItemsAlreadyBought = function () {
      return itemsAlreadyBought;
    };

    service.addToBoughtList = function(indexToBuyList, itemAlreadyBought) {
      itemsToBuy.splice(indexToBuyList,1);
      itemsAlreadyBought.push(itemAlreadyBought);
    };

  }


})();
