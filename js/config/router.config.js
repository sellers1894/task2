(function(){
  angular
  .module('app')
  .config(function($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
    .state('main', {
      abstract: true,
      templateUrl: 'template/main.html'
    })
    .state('main.users', {
      url: '/',
      templateUrl: 'template/home.html'
    })
    .state('main.user', {
      url: '/user',
      templateUrl: 'template/user.html'
    })
    .state('main.todolist', {
      url: '/todolist',
      templateUrl: 'template/todolist.html'
    })
    .state('main.meet', {
      url: '/meet',
      templateUrl: 'template/meet.html'
    })
  });
  // .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  //   $locationProvider.html5Mode({
  //     enabled: true,
  //     requireBase: false
  //   })
  //   $routeProvider
  //     .when('/',{
  //       templateUrl: 'template/home.html',
  //       controller: 'MainController'
  //     })
  //     .when('/user',{
  //       templateUrl: 'template/user.html',
  //       controller: 'UserController'
  //     })
  //     .when('/todolist',{
  //       templateUrl: 'template/todolist.html',
  //       controller: 'TodolistController'
  //     })
  //     .when('/meet',{
  //       templateUrl: 'template/meet.html',
  //       controller: 'MeetController'
  //     })
  //     .otherwise({
  //       redirectTo: '/'
  //     })
  // }])

})();