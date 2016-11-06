(function() {
  'use strict';

  angular
  .module('app')
  .filter('checkgender', function() {
    return function(input) {
    	if (input)
      	return (input === 'M') ? 'Мужской' : 'Женский';
    }
  });

})();