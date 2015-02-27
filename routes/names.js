var nav = require('../navigation.json');
var namesList = require('../names.json');
var greetings = require('../greetings.json');

exports.view = function(req,res) {
	res.render('names', {
		'navigation': nav.navigation,
		'names': namesList.names,
		'sentences': greetings.sentences
	});
};

function play() {
    var audio = document.getElementById("audio");
    audio.play();
};