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
		{"name": "To Do #1", "isDone": false}
	];

	master.addTask = function(event) {
		if(event.keyCode === 13 && master.taskName) {
			master.toDos.push({'name': master.taskName, "isDone": false});
			master.taskName = "";
		};
	};

	master.completeTask = function() {

	};
});