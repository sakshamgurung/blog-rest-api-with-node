const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
	{
		title: {
			type: String,
			require: true,
		},
		createdDate: {
			type: Date,
		},
		content: {
			type: String,
		},
		authorRef: {
			type: Schema.Types.ObjectId,
			ref: "Author",
			required: true,
		},
	},
	{
		collection: "posts",
	}
);

module.exports = Post = mongoose.model("Post", schema);
