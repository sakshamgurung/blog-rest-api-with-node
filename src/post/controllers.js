const PostServices = require("./services");

async function createPost(req, res, next) {
	const { data } = req.body;
	const result = await PostServices.createPost(data);
	res.status(200).send({ post: result });
}

async function getPostById(req, res, next) {
	const { id } = req.params;
	const result = await PostServices.getPostById(id);
	res.status(200).send({ post: result });
}

async function getAllPost(req, res, next) {
	const result = await PostServices.getAllPost();
	res.status(200).send({ posts: result });
}

async function updatePostById(req, res, next) {
	const { id } = req.params;
	const { data } = req.body;
	const result = await PostServices.updatePostById(id, data);
	res.status(200).send({ posts: result });
}

module.exports = { createPost, getPostById, getAllPost, updatePostById };
