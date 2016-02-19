angular.module('app.services', [])

.service('LoginService', function($http){
	
	this.request = function (user, pass) {

		var data = {
			username: user,
			password: pass
		};

		console.log(data);

		$http({
		  method: 'POST',
		  url: 'http://localhost:9998/api/Login',
		  data: data
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