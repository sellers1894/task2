(function() {
  'use strict';

  angular
  .module('app.meet')
  .controller('UserController', UserController);

  UserController.$inject = ['userValue', '$location', 'dataservice'];

  function UserController(userValue, $location, dataservice) {
    console.log($location.url());
    var vm = this;
    vm.user = userValue.get();
  }

})();