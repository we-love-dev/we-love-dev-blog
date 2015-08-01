var mongoose = require('mongoose');

var post = new mongoose.Schema({
	title: { type: String, required: true },
	outputTitle: { type: String, required: true },
	date: { type: Date, default: Date.now },
	resume: { type: String, required: true },
	picture: { type: String, required: true }
	// tags
	// autor
	// content
	// related
});

module.exports = mongoose.model('Post', post);