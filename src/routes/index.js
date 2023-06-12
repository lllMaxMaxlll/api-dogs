const { Router } = require("express");

// Import routers;
const pingRouter = require("./middlewares/ping");
const dogsRouter = require("./middlewares/dogs");
const dogRouter = require("./middlewares/dog");

const router = Router();

// Redirect to middlewares
router.use("/ping", pingRouter);
router.use("/dogs", dogsRouter);
router.use("/dog", dogRouter);

module.exports = router;
