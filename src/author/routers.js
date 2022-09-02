const express = require("express");
const router = express.Router();
const AuthorControllers = require("./controllers");

router.post("/authors", AuthorControllers.createAuthor);
router.get("/authors/:id", AuthorControllers.getAuthorById);
router.get("/authors", AuthorControllers.getAllAuthor);

module.exports = router;
