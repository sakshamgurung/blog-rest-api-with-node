const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
	{
		name: {
			type: String,
			require: true,
		},
		bio: {
			type: String,
		},
		socialMedia: [
			{
				name: String,
				url: String,
			},
		],
	},
	{
		collection: "authors",
	}
);

module.exports = Author = mongoose.model("Author", schema);
