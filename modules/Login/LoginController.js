angular.module('app.controllers', [])

.controller('LoginController', function($scope, LoginService) {
	
	console.log('Iniciou o LoginController');

	$scope.login = function (user, pass) {

		console.log("LOGIN");
		console.log(user);
		console.log(pass);

		LoginService.request(user, pass);

	};

	

})