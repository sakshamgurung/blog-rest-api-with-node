const Post = require("./schema");

async function createPost(postData) {
	const doc = new Post(postData);
	const result = await doc.save();
	return result;
}

async function getPostById(postId) {
	const result = await Post.findById(postId).populate("authorRef", "name");
	return result;
}

async function getAllPost() {
	const result = await Post.find().populate("authorRef", "name");
	return result;
}

async function updatePostById(postId, data) {
	const result = await Post.findByIdAndUpdate(postId, data, { new: true }).populate(
		"authorRef",
		"name"
	);
	return result;
}

module.exports = { createPost, getPostById, getAllPost, updatePostById };
