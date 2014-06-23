console.log('loading project model');
var mongoose = require('mongoose');
var Grid = require('gridfs-stream');

var projectSchema = new mongoose.Schema({
	title: String,
	body: String,
	url: String,
	images: [String],
	tags: [String]
});

var Project = mongoose.model('Project', projectSchema);