angular.module('app.controllers', [])

.controller('IndexController', function($window) {
	
	console.log('Iniciou o IndexController');

	$window.location.href = '../Login/LoginView.html'

});