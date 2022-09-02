const express = require("express");
const router = express.Router();
const PostControllers = require("./controllers");

router.post("/posts", PostControllers.createPost);
router.get("/posts/:id", PostControllers.getPostById);
router.get("/posts", PostControllers.getAllPost);
router.put("/posts/:id", PostControllers.updatePostById);

module.exports = router;
