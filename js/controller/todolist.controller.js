(function() {
  'use strict';

  angular.module('app.todolist').controller('TodolistController', TodolistController);

  TodolistController.$inject = ['userValue', 'todolistValue'];

  function TodolistController(userValue, todolistValue) {
    var vm = this;
    vm.fulfill = fulfill;
    vm.deleteItem = deleteItem;
    vm.sort = sort;
    vm.sortField = undefined;
    vm.reverse = false;

    function fulfill(index){
      todolistValue.get().list[index].fulfill = !todolistValue.get().list[index].fulfill;
      localStorage.setItem('todolist.'+userValue.get().todoListUrl, JSON.stringify(todolistValue.get()));
    }

    function deleteItem(index){
        todolistValue.get().list.splice(index,1);
        localStorage.setItem('todolist.'+userValue.get().todoListUrl, JSON.stringify(todolistValue.get()));
    }

    function sort() {
      if (vm.sortField === 'title'){
        vm.reverse = !vm.reverse;
      }else{
        vm.sortField = 'title';
        vm.reverse = false;
      }
    }
  }

})();