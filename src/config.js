require("dotenv").config();

module.exports = {
	port: parseInt(process.env.PORT, 10) || 5000,
	remoteDatabaseURL: process.env.MONGODB_ATLAS_URL,
};
