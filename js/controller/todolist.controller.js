(function() {
  'use strict';

  angular.module('app.user').controller('TodolistController', TodolistController);

  TodolistController.$inject = ['userValue', 'todolistValue'];

  function TodolistController(userValue, todolistValue) {
    var vm = this;
    vm.user = userValue;
    vm.update = update;
    console.log(userValue);
    function update(){
    	vm.user = userValue;
    }
  }

})();