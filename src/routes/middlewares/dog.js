const { Router } = require("express");
const router = Router();

router.post("/", async (req, res) => {
	const { name, color, tail_length, weight } = req.body;

	try {
		const newDog = await createDog(name, color, tail_length, weight);
		res.status(201).send(newDog);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
});

module.exports = router;
