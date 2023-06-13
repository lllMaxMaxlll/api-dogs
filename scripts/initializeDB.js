const { Dog, sequelize } = require("../src/database");

// Sync db and create this dogs
const initializeDB = async () => {
	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
		await sequelize.sync({ force: true });
		await Dog.bulkCreate([
			{ name: "Neo", color: "red & amber", tail_length: 22, weight: 32 },
			{ name: "Jessy", color: "black & white", tail_length: 7, weight: 14 },
		]);
		console.log("Database initialized successfully");
		process.exit(0);
	} catch (error) {
		console.error("Error initializing database:", error);
		process.exit(1);
	}
};

initializeDB();
