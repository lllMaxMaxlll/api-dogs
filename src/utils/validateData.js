const validateNewDog = (req, res, next) => {
	const { name, color, tail_length, weight } = req.body;

	try {
		if (!name) throw Error("Missing required name");
		if (!color) throw Error("Missing required color");
		if (typeof tail_length !== "number") throw Error("Tail length must to be a number");
		if (tail_length < 1) throw Error("Tail length must to be equal or major of 1");
		if (!tail_length) throw Error("Missing required tail length");
		if (typeof weight !== "number") throw Error("Weight must to be a number");
		if (weight < 1) throw Error("Weight must to be equal or major of 1");
		if (!weight) throw Error("Missing required weight");

		next();
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = { validateNewDog };
