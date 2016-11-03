(function() {

  angular
  .module('app.helpers')
  .factory('dataservice', Dataservice);

  Dataservice.$inject = ['$http', '$q']

  function Dataservice($http, $q) {
    var usersName = ['john', 'andrey', 'kate'];
    var todolistName = ['list1', 'list2', 'list3'];
    var meetName = ['meet1', 'meet2', 'meet3'];
    var service = {
      onLoad: onLoad,
      getDataJSON: getDataJSON,
      getData: getData,
      setData: setData,
      getRandomUser: getRandomUser
    };
    return service;

    function onLoad(){
      localStorage.setItem("usersName", JSON.stringify(usersName));
      localStorage.setItem("todolistName", JSON.stringify(todolistName));
      localStorage.setItem("meetName", JSON.stringify(meetName));

      var users = [];
      usersName.forEach(function(item) {
        users.push(getDataJSON('users/'+item));
      });
      localStorage.setItem("users", JSON.stringify(users));

      var todolist = [];
      todolistName.forEach(function(item) {
        todolist.push(getDataJSON('todolist/'+item));
      });
      localStorage.setItem("todolist", JSON.stringify(todolist));

      setDataArrToLocal(usersName, 'users');
      setDataArrToLocal(todolistName, 'todolist');
      setDataArrToLocal(meetName, 'meet');
      console.log(JSON.parse(localStorage.getItem('users.john')));


    }

    function getRandomUser(){
      var buf = JSON.parse(localStorage.getItem("usersName"));
      return usersName[Math.floor(Math.random()*buf.length)];
    }

    function setDataArrToLocal(arrName, type){
      arrName.forEach(function(item) {
        getDataJSON(type+'/'+item).then(function(res) {
          localStorage.setItem(type+'.'+item, JSON.stringify(res));
        });
      });
    }

    function getDataJSON(path) {
      // console.log(path);
      return $http.get('data/'+path+'.json').then(function(res) {
        return res.data.testData;
      })
    }

    function getData(type, name) {
      return JSON.parse(localStorage.getItem(type+'.'+name));
      // return $http.get('data/'+path+'.json').then(function(res) {
      //   return res.data.testData;
      // })
    }

    function setData(){

    }
  }
})();