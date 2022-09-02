const AuthorServices = require("./services");

async function createAuthor(req, res, next) {
	const { data } = req.body;
	const result = await AuthorServices.createAuthor(data);
	res.status(200).send({ author: result });
}

async function getAuthorById(req, res, next) {
	const { id } = req.params;
	const result = await AuthorServices.getAuthorById(id);
	res.status(200).send({ author: result });
}

async function getAllAuthor(req, res, next) {
	const result = await AuthorServices.getAllAuthor();
	res.status(200).send({ authors: result });
}

module.exports = { createAuthor, getAuthorById, getAllAuthor };
