const express = require("express");

const config = require("./src/config");
const connectDB = require("./src/connectDB");
const AuthorRouters = require("./src/author/routers");
const PostRouters = require("./src/post/routers");

const app = express();
const apiVersion = "/api/v1";
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(apiVersion, AuthorRouters);
app.use(apiVersion, PostRouters);

app.listen(config.port, () => {
	console.log(`Server running at PORT:${config.port}`);
});
