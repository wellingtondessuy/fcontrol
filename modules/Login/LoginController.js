angular.module('app', [])

.controller('LoginController', ['$scope', function($scope) {
	
	$scope.login = function () {

		console.log("entrou na função de login");

	}

}])