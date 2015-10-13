// weather controller

app.controller('weathCtrl', ['$scope', 'weathService', function($scope, weathService) {
	weathService.success(function(data) {
		$scope.weathData = data.current_observation;
	});
}]);