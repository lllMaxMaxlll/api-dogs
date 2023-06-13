const { Dog } = require("../../database");

const createDog = async (name, color, tail_length, weight) => {
	// Search in DB if dog is already created
	const dogAlreadyCreated = await Dog.findOne({ where: { name } });
	if (dogAlreadyCreated) throw Error("A dog with same name is already created");

	// Creating new dog in DB
	const newDog = await Dog.create({ name, color, tail_length, weight });

	return newDog;
};

module.exports = { createDog };
