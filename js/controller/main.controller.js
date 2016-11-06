(function() {
  'use strict';

  angular.module('app').controller('MainController', MainController);

  MainController.$inject = ['userValue', 'todolistValue', 'meetValue', 'dataservice', '$q'];

  function MainController(userValue, todolistValue, meetValue, dataservice, $q) {
    var vm = this;
    vm.activate = activate;
    vm.sort = sort;
    vm.sortField = undefined;
    vm.reverse = false;


    dataservice.onLoad();
    function activate() {


      var user = dataservice.getRandomUser();
      dataservice.getData('users',user).then(function(res) {
        vm.user = res;
        userValue.set(res);
        return dataservice.getData('todolist',userValue.get().todoListUrl);
      }).then(function(res2){
        vm.todolist = res2;
        todolistValue.set(res2);
        return dataservice.getData('meet',todolistValue.get().meet);
      }).then(function(res3){
        vm.meet = res3;
        meetValue.set(res3);
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

  }

})();