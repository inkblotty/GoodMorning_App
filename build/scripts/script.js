// initial app

var app = angular.module('dashApp', ['angularMoment']);
// get weather service

app.factory('weathService', ['$http', function($http) {
	return $http.get('http://api.wunderground.com/api/48f95e00cc76b246/conditions/q/CO/Denver.json')
	.success(function(data) {
		return data;
	})
	.error(function(err) {
		return err;
	});
}]);
app.controller('masterCtrl', ["$scope", function($scope) {
	var master = this;

	var images = ['winter', 'spring', 'summer', 'fall'];
	var imgPick;

	master.info = {
	  name: "inkblotty",
	  date: new Date(),
	  month: (new Date()).getMonth(),
	  currBack: imgPick
	};
/*
	var index = Math.floor(month%12/3);
	imgPick = images[index];
*/
	master.toDos = [
		{"name": "To Do #1", "isDone": false}
	];

	master.addTask = function(event) {
		if(event.keyCode === 13) {
			master.toDos.push({'name': master.taskName, "isDone": false});
			master.taskName = "";
		};
	};

	master.deleteTask = function() {

	};
}]);
// weather controller

app.controller('weathCtrl', ['$scope', 'weathService', function($scope, weathService) {
	var weath = this;

	weathService.success(function(data) {
		weath.weathData = data.current_observation;
		weath.location = data.current_observation.display_location;
	});
}]);
app.directive('parseStyle', ["$interpolate", function($interpolate) {
	return function(scope, elem) {
	  var exp = $interpolate(elem.html()),
	      watchFunc = function() { return exp(scope); };

	  scope.$watch(watchFunc, function(html) {
	  	elem.html(html);
	  });
	};
}]);

app.filter('noSpace', function() {
	return function(input) {
	  return input.replace(/[\s]/g, '');
	};
});