(function() {
  'use strict';

  angular
  .module('app.todolist')
  .controller('TodolistController', TodolistController);

  TodolistController.$inject = ['userValue', 'todolistValue', 'dataservice'];

  function TodolistController(userValue, todolistValue, dataservice) {
    var vm = this;
    vm.fulfill = fulfill;
    vm.deleteItem = deleteItem;
    vm.add = add;
    vm.sort = sort;
    vm.sortField;
    vm.reverse = false;

    function fulfill(index){
      todolistValue.get().list[index].fulfill = !todolistValue.get().list[index].fulfill;
      dataservice.setData('todolist.'+userValue.get().todoListUrl, todolistValue.get());
    }

    function deleteItem(index){
        todolistValue.get().list.splice(index,1);
        dataservice.setData('todolist.'+userValue.get().todoListUrl, todolistValue.get());
    }

    function sort() {
      if (vm.sortField === 'title'){
        vm.reverse = !vm.reverse;
      }else{
        vm.sortField = 'title';
        vm.reverse = false;
      }
    }

    function add(newList){
      if (newList !== undefined && newList.title && newList.time){
        newList.fulfill = false;
        // console.log(newList);
        todolistValue.get().list.push(newList);
        dataservice.setData('todolist.'+userValue.get().todoListUrl, todolistValue.get());
        console.log(todolistValue.get().list);
      }
    }
  }

})();