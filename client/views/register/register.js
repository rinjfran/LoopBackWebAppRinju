app.controller('regController', function ($rootScope, $scope, $state, $ionicLoading, $timeout, $http, PROFILES) {

	$scope.user = {};
	$scope.doSubmit = function (user) {
		console.log(JSON.stringify(user));

		var reqbody = {
			"FIRSTNAME": user.firstname,
			"LASTNAME": user.lastname,
			"EMAILID": user.email,
			"PASWORD": user.password,
			"id": 123
		}
		PROFILES.create(reqbody)
			.$promise
			.then(function (results) {
				console.log("Profile created " + JSON.stringify(results));

			}).catch(function (err) {
				console.log("Profile error " + JSON.stringify(err));


			}).finally(function () {
				console.log("Done");
			});
	}


});