// get weather service

app.factory('weathService', ['$http', function($http) {
	return
	$http.get('http://api.wunderground.com/api/48f95e00cc76b246/conditions/q/CO/Denver.json')
	.success(function(data) {
		return data;
	})
	.error(function(err) {
		return err;
	});
}])