(function() {
  'use strict';

  angular
  .module('app')
  .controller('MainController', MainController);

  MainController.$inject = ['userValue', 'todolistValue', 'meetValue', 'dataservice', '$q'];

  function MainController(userValue, todolistValue, meetValue, dataservice, $q) {
    var vm = this;
    vm.activate = activate;

    dataservice.onLoad();//загрузка из ф-в JSON в localStorage
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

  }

})();