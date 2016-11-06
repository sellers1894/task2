(function(){
	angular
	.module('app.helpers')
	.factory('userValue', userValue);

  function userValue() {
  	var user;
    var service = {
      set: set,
      get: get
    };
    return service;

    function set(val){
    	user = val;
    }
    function get(){
    	return user;
    }
  }

})();