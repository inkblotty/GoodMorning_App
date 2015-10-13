// initial app

var app = angular.module('dashApp', []);

// weather controller

app.controller('weathCtrl', ['$scope', function($scope) {
	
})
// get weather service

app.factory('weathService', ['$http', function($http) {
	return
	$http.get('http://api.wunderground.com/api/48f95e00cc76b246/conditions/q/CO/Denver.json')
	.then(function(data) {
		return data;
	})
	.err(function(err) {
		return err;
	});
}])