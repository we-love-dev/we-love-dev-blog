var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	title: { type: String, required: true },
	subTitle: { type: String, required: true },
	date: { type: Date, default: Date.now },
	resume: { type: String, required: true },
	picture: { type: String, required: true },
	tags: { type: [Schema.Types.ObjectId], required: true },
	autor: { type: Schema.Types.ObjectId, required: true },
	contentSrc: { type: String, required: true },
	relatedPosts: { type: [Schema.Types.ObjectId], required: true }
});

module.exports = mongoose.model('Post', schema);
