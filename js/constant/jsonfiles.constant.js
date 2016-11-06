(function(){
	angular
  .module('app.helpers')
  .constant('jsonFiles', {
  	usersName: ['john', 'andrey', 'kate'],
    todolistName: ['list1', 'list2', 'list3'],
    meetName: ['meet1', 'meet2', 'meet3']
  });
})();