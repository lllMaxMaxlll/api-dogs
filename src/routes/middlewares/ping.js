const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
	try {
		const message = "Dogshouseservice.Version1.0.1";
		res.status(200).json(message);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
});

module.exports = router;
