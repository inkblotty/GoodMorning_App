app.filter('noSpace', function() {
	return function(input) {
	  return input.replace(/[\s]/g, '');
	};
});