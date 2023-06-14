const { Dog } = require("../../database");

const getDogs = async (order, pageNumber, attribute = "id", limit) => {
	const pageSize = parseInt(limit?.replace(/\D/g, ""));
	const sortBy = attribute;
	const sortOrder = order === "desc" ? "DESC" : "ASC";
	const offset = parseInt((pageNumber - 1) * pageSize);

	// Validate
	const validAttribute = ["id", "name", "color", "tail_length", "weight"].includes(sortBy);
	if (!validAttribute) throw new Error("Attribute is not valid");
	if (offset < 0) throw new Error("Page number must to be major of 1");

	const dogs = await Dog.findAll({
		attributes: ["name", "color", "tail_length", "weight"],
		order: [[sortBy, sortOrder]],
		offset,
		pageSize,
	});

	return dogs;
};

module.exports = { getDogs };
