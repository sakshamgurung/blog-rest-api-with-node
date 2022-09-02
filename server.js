const express = require("express");
const config = require("./src/config");
const connectDB = require("./src/connectDB");

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
	res.status(200).send("Everything is working");
});

app.listen(config.port, () => {
	console.log(`Server running at PORT:${config.port}`);
});
