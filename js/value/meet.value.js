(function(){
	angular
	.module('app.helpers')
	.factory('meetValue', meetValue);

  function meetValue() {
  	var meet;
    var service = {
      set: set,
      get: get
    };
    return service;

    function set(val){
    	meet = val;
    }
    function get(){
    	return meet;
    }

  }


})();