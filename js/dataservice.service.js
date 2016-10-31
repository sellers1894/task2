(function() {
  angular
  .module('app.helpers')
  .factory('dataservice', Dataservice);

  Dataservice.$inject = ['$http', '$q']

  function Dataservice($http, $q) {
    var users = ['john', 'andrey', 'kate'];
    var service = {
      getData: getData,
      getRandomUser: getRandomUser
    };
    return service;

    function getRandomUser(){
      return users[Math.floor(Math.random()*users.length)];
    }

    function getData(path) {
      return $http.get('data/'+path+'.json').then(function(res) {
        return res.data.testData;
      })
    }
  }
})();