const app = require("./src/app");
require("dotenv").config();
const { PORT } = process.env;

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
