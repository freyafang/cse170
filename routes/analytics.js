var nav = require('../navigation.json');
var rankings = require('../rankings.json');

exports.view = function(req,res) {
	var combined_json = {};
	combined_json["navigation"] = nav;
	combined_json['rankings'] = rankings;

	console.log(combined_json);

	res.render('analytics', combined_json);
//	res.render('analytics',rankings);	
};