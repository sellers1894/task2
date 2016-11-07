(function() {
  'use strict';

  angular
  .module('app')
  .controller('MainController', MainController);

  angular
  .module('app')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    })
    $routeProvider
      .when('/',{
        templateUrl: 'template/home.html',
        controller: 'MainController'
      })
      .when('/user',{
        templateUrl: 'template/user.html',
        controller: 'UserController'
      })
      .when('/todolist',{
        templateUrl: 'template/todolist.html',
        controller: 'TodolistController'
      })
      .when('/meet',{
        templateUrl: 'template/meet.html',
        controller: 'MeetController'
      })
      .otherwise({
        redirectTo: '/'
      })
  }])

  MainController.$inject = ['userValue', 'todolistValue', 'meetValue', '$location', 'dataservice', '$q'];

  function MainController(userValue, todolistValue, meetValue, $location, dataservice, $q) {
    console.log($location.url());
    var vm = this;
    vm.activate = activate;

    dataservice.onLoad();//загрузка из ф-в JSON в localStorage
    function activate() {
      var user = dataservice.getRandomUser();
      dataservice.getData('users',user).then(function(res) {
        vm.user = res;
        userValue.set(res);
        return dataservice.getData('todolist',userValue.get().todoListUrl);
      }).then(function(res2){
        vm.todolist = res2;
        todolistValue.set(res2);
        return dataservice.getData('meet',todolistValue.get().meet);
      }).then(function(res3){
        vm.meet = res3;
        meetValue.set(res3);
      });
    }

  }
})();