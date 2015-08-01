var mongoose = require('mongoose');

var author = new mongoose.Schema({
	name: { type: String, required: true },
	picture: { type: String, required: true },
	resume: { type: String, required: true }
});

module.exports = mongoose.model('Author', author);