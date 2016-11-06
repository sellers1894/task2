(function() {

  angular
  .module('app.helpers')
  .factory('dataservice', Dataservice);

  Dataservice.$inject = ['$http', '$q']

  function Dataservice($http, $q) {
    var usersName = ['john', 'andrey', 'kate'];
    var todolistName = ['list1', 'list2', 'list3'];
    var meetName = ['meet1', 'meet2', 'meet3'];
    var randomUser;
    var service = {
      onLoad: onLoad,
      getDataJSON: getDataJSON,
      getData: getData,
      setData: setData,
      getRandomUser: getRandomUser,
      getRandomUserNumber
    };
    return service;

    function onLoad(){
      localStorage.setItem("usersName", JSON.stringify(usersName));
      localStorage.setItem("todolistName", JSON.stringify(todolistName));
      localStorage.setItem("meetName", JSON.stringify(meetName));


      setDataArrToLocal(usersName, 'users');
      setDataArrToLocal(todolistName, 'todolist');
      setDataArrToLocal(meetName, 'meet');

      console.log(JSON.parse(localStorage.getItem('users.john')));
    }

    function getRandomUser(){
      var buf = JSON.parse(localStorage.getItem("usersName"));
      randomUser = Math.floor(Math.random()*buf.length);
      return usersName[randomUser];
    }
    function getRandomUserNumber(){
      return randomUser;
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

    function setData(){

    }
  }
})();