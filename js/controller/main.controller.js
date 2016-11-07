(function() {
  'use strict';

  angular
  .module('app')
  .controller('MainController', MainController);

  MainController.$inject = ['userValue', 'todolistValue', 'meetValue', '$location', 'dataservice', '$q'];

  function MainController(userValue, todolistValue, meetValue, $location, dataservice, $q) {
    console.log($location.url());
    var vm = this;
    vm.checkUser = checkUser;
    vm.usersName = dataservice.getUserName();
    vm.currentUserId = 1;

    dataservice.onLoad();//загрузка из ф-в JSON в localStorage
    checkUser(vm.currentUserId);

    function checkUser() {
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
      console.log(meetValue.get());
    }


  }
})();