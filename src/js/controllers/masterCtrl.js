app.controller('masterCtrl', function($scope) {
	var master = this;

	var images = ['spring', 'summer', 'fall', 'winter'];
	var imgPick;

	master.info = {
	  name: "inkblotty",
	  date: new Date(),
	  month: (new Date()).getMonth(),
	  currBack: imgPick
	};
/*
	if (master.month > 2 && master.month < 6) {
		master.currBack = images[0];
	} else if (master.month >= 6 && master.month < 9) {
		master.currBack = images[1];
	} else if (master.month >= 9 && master.month < 12) {
		master.currBack = images[2];
	} else { master.currBack = images[3]; }

	console.log(master.currBack);
*/
	master.toDos = {};
});