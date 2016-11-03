(function() {
  'use strict';

  angular.module('app').controller('MainController', MainController);

  MainController.$inject = ['dataservice', '$q'];

  function MainController(dataservice, $q) {
    var vm = this;
    vm.activate = activate;
    vm.sort = sort;
    vm.sortField = undefined;
    vm.reverse = false;

    function activate() {
      dataservice.onLoad();
      localStorage.setItem("saved", "ad");
      console.log(localStorage.getItem("saved"));
      var user = dataservice.getRandomUser();
      dataservice.getDataJSON('users/'+user).then(function(res) {
        vm.step1 = res;
        console.log(vm.step1);
        return dataservice.getDataJSON('todolist/'+vm.step1.todoListUrl);
      }).then(function(res2){
        vm.step2 = res2;
        console.log(vm.step2);
        return dataservice.getDataJSON('meet/'+vm.step2.meet);
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
    };
  }
})();


angular.module('app').filter('checkfulfill', function() {
  return function(input) {
    return (!!input) ? '\u2713' : '\u2718';
  }
});
