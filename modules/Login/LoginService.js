angular.module('app.services', [])

.service('LoginService', function($http){
	
	this.request = function (username, password) {

		$http({
		  method: 'GET',
		  url: 'http://localhost:9998/api/Orders'
		}).then(function successCallback(response) {
		    console.log('sucesso');
		    console.log(response);
		  }, function errorCallback(response) {
		    console.log('erro');
		    console.log(response);
		  });

	};

	return this;

})