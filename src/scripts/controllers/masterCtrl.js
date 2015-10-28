app.controller('masterCtrl', function($scope) {
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
		{"name": "To Do #1"}
	];

	console.log('controller is loaded');

	master.addTask = function($scope, element, attr) {
		alert('addTask called with key: ' + event.keyCode+ " and taskName: " + master.taskName);
		if(event.keyCode == 13 && master.taskName) {
			console.log('addTask is running');
			master.toDos.push({'name': master.taskName});
			master.taskName = "";
		};
	};

	master.deleteTask = function() {

	};
});