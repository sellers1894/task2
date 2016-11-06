(function() {
  'use strict';

  angular.module('app').controller('MainController', MainController);

  MainController.$inject = ['userValue', 'todolistValue', 'dataservice', '$q'];

  function MainController(userValue, todolistValue, dataservice, $q) {
    var vm = this;
    vm.activate = activate;
    vm.sort = sort;
    vm.fulfill = fulfill;
    vm.deleteItem = deleteItem;
    vm.sortField = undefined;
    vm.reverse = false;


    dataservice.onLoad();
    function activate() {

      var user = dataservice.getRandomUser();
      dataservice.getData('users',user).then(function(res) {
        vm.user = res;
        userValue = res;
        return dataservice.getData('todolist',userValue.todoListUrl);
      }).then(function(res2){
        vm.todolist = res2;
        todolistValue = res2;
        return dataservice.getData('meet',todolistValue.meet);
      }).then(function(res3){
        vm.step3 = res3;
        console.log(vm.step3);
      });
    }

    function sort(fieldName) {
      console.log(fieldName);
      if (vm.sortField === fieldName){
        vm.reverse = !vm.reverse;
      }else{
        vm.sortField = fieldName;
        vm.reverse = false;
      }
    }


    function fulfill(type, index){
      if (type === "todolist"){
        todolistValue.list[index].fulfill = !todolistValue.list[index].fulfill;
        localStorage.setItem(type+'.'+vm.user.todoListUrl, JSON.stringify(todolistValue));
      }
      else if (type === "meet"){
        vm.step3.list[index].fulfill = !vm.step3.list[index].fulfill;
        localStorage.setItem(type+'.'+todolistValue.meet, JSON.stringify(vm.step3));
      }

    }
    function deleteItem(type, index){
      if (type === "todolist"){
        todolistValue.list.splice(index,1);
        localStorage.setItem(type+'.'+userValue.todoListUrl, JSON.stringify(todolistValue));
      }
      else if (type === "meet"){
        vm.step3.list.splice(index,1);
        localStorage.setItem(type+'.'+todolistValue.meet, JSON.stringify(vm.step3));
      }

    }




  }

})();