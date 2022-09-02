const Author = require("./schema");

async function createAuthor(authorData) {
	const doc = new Author(authorData);
	const result = await doc.save();
	return result;
}

async function getAuthorById(authorId) {
	const result = await Author.findById(authorId);
	return result;
}

async function getAllAuthor() {
	const result = await Author.find();
	return result;
}

module.exports = { createAuthor, getAuthorById, getAllAuthor };
