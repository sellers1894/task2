(function(){
	angular
	.module('app.helpers')
	.factory('todolistValue', TodolistValue);

  function TodolistValue() {
  	var todolist;
    var service = {
      set: set,
      get: get
    };
    return service;

    function set(val){
    	todolist = val;
    }
    function get(){
    	return todolist;
    }
  }

})();