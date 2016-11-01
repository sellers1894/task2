(function() {
  angular
  .module('app.helpers').config(function ($httpProvider, $httpParamSerializerJQLikeProvider){
    $httpProvider.defaults.transformRequest.unshift($httpParamSerializerJQLikeProvider.$get());
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8';
  });
  angular
  .module('app.helpers')
  .factory('dataservice', Dataservice);

  Dataservice.$inject = ['$http', '$q']

  function Dataservice($http, $q) {
    var users = ['john', 'andrey', 'kate'];
    var service = {
      getData: getData,
      setData: setData,
      getRandomUser: getRandomUser
    };
    return service;

    function getRandomUser(){
      return users[Math.floor(Math.random()*users.length)];
    }

    function getData(path) {
      $http
      return $http.get('data/'+path+'.json').then(function(res) {
        return res.data.testData;
      })
    }

    function setData(){
      
    }
  }
})();