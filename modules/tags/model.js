var mongoose = require('mongoose');

var tag = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String, required: true }
});

module.exports = mongoose.model('Tag', tag);