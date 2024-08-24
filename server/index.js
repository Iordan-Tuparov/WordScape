const express = require("express");

const { PORT } = require("./config/env");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./routes");

let app = express();

require("./config/mongooseConfig")();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(router);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
