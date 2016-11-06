(function() {
  'use strict';

  angular
  .module('app')
  .filter('checkfulfill', function() {
    return function(input) {
      return (!!input) ? '\u2713' : '\u2718';
    }
  });

})();