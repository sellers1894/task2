(function() {
  'use strict';

  angular.module('app').controller('MainController', MainController);

  MainController.$inject = ['dataservice', '$q'];

  function MainController(dataservice, $q) {
    var vm = this;
    activate();

    function activate() {
      console.log('Main Controller activated');
      dataservice.getData('users/john').then(function(res) {
        vm.step1 = res;
        console.log(vm.step1);
        return dataservice.getData('todolist/'+vm.step1.todoListUrl);
      }).then(function(res2){
        vm.step2 = res2;
        console.log(vm.step2);
      });
    }
  }
})();