(function() {

  angular
  .module('app.helpers')
  .factory('dataservice', Dataservice);

  Dataservice.$inject = ['$http', '$q', 'jsonFiles']

  function Dataservice($http, $q, jsonFiles) {

    var service = {
      onLoad: onLoad,
      getDataJSON: getDataJSON,
      getData: getData,
      setData: setData,
      getUser: getUser,
      getUserName: getUserName
    };
    return service;

    function onLoad(){
      localStorage.setItem("usersName", JSON.stringify(jsonFiles.usersName));
      localStorage.setItem("todolistName", JSON.stringify(jsonFiles.todolistName));
      localStorage.setItem("meetName", JSON.stringify(jsonFiles.meetName));

      setDataArrToLocal(jsonFiles.usersName, 'users');
      setDataArrToLocal(jsonFiles.todolistName, 'todolist');
      setDataArrToLocal(jsonFiles.meetName, 'meet');
    }

    function getUser(id){
      var buf = JSON.parse(localStorage.getItem("usersName"));
      return jsonFiles.usersName[id];
    }

    function setDataArrToLocal(arrName, type){
      arrName.forEach(function(item) {
        getDataJSON(type+'/'+item).then(function(res) {
          localStorage.setItem(type+'.'+item, JSON.stringify(res));
        });
      });
    }

    function getDataJSON(path) {
      return $http.get('data/'+path+'.json').then(function(res) {
        return res.data.testData;
      })
    }

    function getData(type, name) {
      var deferred = $q.defer();
      deferred.resolve(JSON.parse(localStorage.getItem(type+'.'+name)));
      return deferred.promise;
    }

    function setData(name, object){
      localStorage.setItem(name, JSON.stringify(object));
    }

    function getUserName(){
      return jsonFiles.usersName;
    }
  }
})();