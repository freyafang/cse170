var nav = require('../navigation.json');

exports.showNav = function(req,res) {
	console.log("in here");
	res.render('international_cafe',nav);	
}
