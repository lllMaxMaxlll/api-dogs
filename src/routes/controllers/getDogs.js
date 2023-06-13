const { Dog } = require("../../database");

const getDogs = async (order, pageNumber, attribute, limit) => {
	const pageSize = limit?.replace(/\D/g, "");
	const sortBy = attribute || "name";
	const sortOrder = order === "desc" ? "DESC" : "ASC";
	const offset = (pageNumber - 1) * pageSize || 0;

	const dogs = await Dog.findAll({
		order: [[sortBy, sortOrder]],
		offset: parseInt(offset),
		pageSize: parseInt(pageSize) ?? undefined,
	});

	return dogs;
};

module.exports = { getDogs };
