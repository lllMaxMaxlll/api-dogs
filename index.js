const app = require("./src/app");
const { Dog, sequelize } = require("./src/database.js");

// Sync db and create this dogs
sequelize
	.sync({ force: true })
	.then(() => {
		Dog.bulkCreate([
			{ name: "Neo", color: "red & amber", tail_length: 22, weight: 32 },
			{ name: "Jessy", color: "black & white", tail_length: 7, weight: 14 },
		]);
		console.log("Database initialized");
	})
	.then(() => {
		app.listen(8080, () => {
			console.log("listening at port 8080");
		});
	})
	.catch((error) => console.error("Unable to connect to the database:", error));
