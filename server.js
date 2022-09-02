const express = require("express");

const config = require("./src/config");
const connectDB = require("./src/connectDB");
const AuthorRouters = require("./src/author/routers");

const app = express();
const apiVersion = "/api/v1";
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
	res.status(200).send("Everything is working");
});
app.use(apiVersion, AuthorRouters);

app.listen(config.port, () => {
	console.log(`Server running at PORT:${config.port}`);
});
