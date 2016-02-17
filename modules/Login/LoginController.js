angular.module('app.controllers', [])

.controller('LoginController', function($scope, LoginService) {
	
	$scope.login = function () {

		LoginService.request('user', 'pass');

		console.log("entrou na função de login");

	}

})