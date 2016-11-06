(function() {
  'use strict';

  angular.module('app.meet').controller('MeetController', MeetController);

  MeetController.$inject = ['todolistValue', 'meetValue'];

  function MeetController(todolistValue, meetValue) {
    var vm = this;
    vm.fulfill = fulfill;
    vm.deleteItem = deleteItem;
    vm.sort = sort;
    vm.sortField = undefined;
    vm.reverse = false;

    function fulfill(index){
      meetValue.get().list[index].fulfill = !meetValue.get().list[index].fulfill;
      localStorage.setItem('meet.'+todolistValue.get().meet, JSON.stringify(meetValue.get()));
    }

    function deleteItem(index){
        meetValue.get().list.splice(index,1);
        localStorage.setItem('meet.'+todolistValue.get().meet, JSON.stringify(meetValue.get()));
    }

    function sort() {
      if (vm.sortField === 'name'){
        vm.reverse = !vm.reverse;
      }else{
        vm.sortField = 'name';
        vm.reverse = false;
      }
    }
  }

})();