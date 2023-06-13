const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
	host: "localhost",
	dialect: "mssql",
	logging: false,
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Read files from ./models, to push them in modelDefiners array
fs.readdirSync(path.join(__dirname, "/models"))
	// Filter hidden files and non js files
	.filter((file) => file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js")
	.forEach((file) => {
		modelDefiners.push(require(path.join(__dirname, "/models", file)));
	});

// Connect models to sequelize
modelDefiners.forEach((model) => model(sequelize));
// Capitalize model name: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);

sequelize.models = Object.fromEntries(capsEntries);

module.exports = {
	...sequelize.models, // exports models: const { Product, User } = require('./db.js');
	sequelize,
};
