(function() {
  'use strict';

  angular
  .module('app.meet')
  .controller('MeetController', MeetController);

  MeetController.$inject = ['todolistValue', 'meetValue', 'dataservice'];

  function MeetController(todolistValue, meetValue, dataservice) {
    var vm = this;
    vm.fulfill = fulfill;
    vm.deleteItem = deleteItem;
    vm.sort = sort;
    vm.add = add;
    vm.sortField;
    vm.reverse = false;

    function fulfill(index){
      meetValue.get().list[index].fulfill = !meetValue.get().list[index].fulfill;
      dataservice.setData('meet.'+todolistValue.get().meet, meetValue.get());
    }

    function deleteItem(index){
        meetValue.get().list.splice(index,1);
        dataservice.setData('meet.'+todolistValue.get().meet, meetValue.get());
    }

    function sort() {
      if (vm.sortField === 'name'){
        vm.reverse = !vm.reverse;
      }else{
        vm.sortField = 'name';
        vm.reverse = false;
      }
    }

    function add(newList){
      if (newList && newList.name && newList.time){
        meetValue.get().list.push({
          name: newList.name,
          time: newList.time,
          fulfill: false
        });
        dataservice.setData('meet.'+todolistValue.get().meet, meetValue.get());
      }
    }
  }

})();