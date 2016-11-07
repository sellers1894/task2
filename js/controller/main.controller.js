(function() {
  'use strict';

  angular
  .module('app')
  .controller('MainController', MainController);

  MainController.$inject = ['userValue', 'todolistValue', 'meetValue', '$location', 'dataservice', '$q'];

  function MainController(userValue, todolistValue, meetValue, $location, dataservice, $q) {
    var vm = this;
    vm.checkUser = checkUser;
    vm.usersName = dataservice.getUserName();
    vm.currentUserId = dataservice.getCurrentUserId();

    dataservice.onLoad();//загрузка из ф-в JSON в localStorage
    checkUser(vm.currentUserId);



    function checkUser() {
      dataservice.setCurrentUserId(vm.currentUserId);
      var user = dataservice.getUser(vm.currentUserId);
      dataservice.getData('users',user).then(function(res) {
        userValue.set(res);
        return dataservice.getData('todolist',userValue.get().todoListUrl);
      }).then(function(res2){
        todolistValue.set(res2);
        return dataservice.getData('meet',todolistValue.get().meet);
      }).then(function(res3){
        meetValue.set(res3);
      });
    }


  }
})();