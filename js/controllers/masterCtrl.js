app.controller('masterCtrl', function($scope) {
	var master = this;

	master.info = {
	  name: "inkblotty",
	  date: new Date()
	};

	master.toDos = {};
});