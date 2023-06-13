const { Dog } = require("../../database");

const getDogs = async (order, pageNumber, attribute, limit) => {
	const pageSize = parseInt(limit?.replace(/\D/g, ""));
	const sortBy = attribute || "id";
	const sortOrder = order === "desc" ? "DESC" : "ASC";
	const offset = parseInt((pageNumber - 1) * pageSize) || 0;

	const validAttribute = ["id", "name", "color", "tail_length", "weight"].includes(sortBy);
	if (!validAttribute) throw new Error("Attribute is not valid");

	const dogs = await Dog.findAll({
		attributes: ["name", "color", "tail_length", "weight"],
		order: [[sortBy, sortOrder]],
		offset: offset,
		pageSize: pageSize,
	});

	return dogs;
};

module.exports = { getDogs };
