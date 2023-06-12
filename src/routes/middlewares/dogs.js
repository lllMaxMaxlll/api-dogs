const { Router } = require("express");
const router = Router();

router.get("/", async (req, res) => {
	const { order, pageNumber, pageSize } = req.query;

	// Poner los if para ver si existen los querys y asi ordenar la tabla como pida
	// O ponerlos directamente en el controller
	try {
		const dogs = await getAllDogs(order, pageNumber, pageSize);
		res.status(200).send(dogs);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
});

module.exports = router;
