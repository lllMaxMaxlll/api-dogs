const { Router } = require("express");
const router = Router();
const { getDogs } = require("../controllers/getDogs");

router.get("/", async (req, res) => {
	const { order, pageNumber, attribute, limit } = req.query;

	try {
		const dogs = await getDogs(order, pageNumber, attribute, limit);
		res.status(200).send(dogs);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
});

module.exports = router;
