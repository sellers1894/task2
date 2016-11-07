(function(){
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

})();