const mongoose = require("mongoose");
const config = require("./config");

const connectDB = async () => {
	try {
		await mongoose.connect(config.remoteDatabaseURL);
	} catch (error) {
		console.error("Error connecting mongodb: ", error);
		process.exit(1);
	}
};

module.exports = connectDB;
