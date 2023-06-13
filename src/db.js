const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

// New instance of sequelize
const sequelize = new Sequelize("database", "username", "password", {
	host: "localhost",
	dialect: "mssql",
});

// Read files from ./models, to push them in modelDefiners array
fs.readdirSync(path.join(__dirname, "/models"))
	// Filter hidden files and non js files
	.filter((file) => file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js")
	.forEach((file) => {
		modelDefiners.push(require(path.join(__dirname, "/models", file)));
	});

// Connect models to sequelize
modelDefiners.forEach((model) => model(sequelize));
// Capitalize model name ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Dog } = sequelize.models;

module.exports = {
	...sequelize.models, // exports models: const { Product, User } = require('./db.js');
	conn: sequelize, // exports conection { conn } = require('./db.js');
};
