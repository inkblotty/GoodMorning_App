// weather controller

app.controller('weathCtrl', ['$scope', 'weathService', function($scope, weathService) {
	var weath = this;

	weathService.success(function(data) {
		weath.weathData = data.current_observation;
		weath.location = data.current_observation.display_location;
		//console.log(weath.weathData);
		//console.log(weath.location);
	});
}]);