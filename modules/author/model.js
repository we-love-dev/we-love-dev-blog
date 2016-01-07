var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	name: { type: String, required: true },
	picture: { type: String, required: true },
	resume: { type: String, required: true },
	socialMedias: [{
		media: { type: String, required: true },
		src: { type: String, required: true }
	}]
});

module.exports = mongoose.model('Author', schema);
