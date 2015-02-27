var nav = require('../navigation.json');

exports.view = function(req,res) {
	res.render('contact',nav);	
};