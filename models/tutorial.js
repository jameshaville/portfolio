console.log('loading tutorial model');
var mongoose = require('mongoose');

var tutorialSchema = new mongoose.Schema({
	title: String,
	author: String,
	body: String,
	comments:[{body: String, date: Date, approved: Boolean}],
	date:[{type: Date, default: Date.now}]
});

mongoose.model('Tutorial', tutorialSchema);