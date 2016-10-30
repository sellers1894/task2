(function() {
  angular
  .module('app.helpers')
  .factory('dataservice', Dataservice);

  Dataservice.$inject = ['$http', '$q']

  function Dataservice($http, $q) {
    var service = {
      getData: getData
    };
    return service;

    function getData(path) {
      return $http.get('data/'+path+'.json').then(function(res) {
        return res.data.testData;
      })
    }
  }
})();