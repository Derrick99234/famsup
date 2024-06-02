const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const config = require("./config.json");
const { handleNewUser } = require("./controllers/registerController");
const { handleLogin } = require("./controllers/authController");

mongoose.connect(config.connectionString);

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));

app.post("/register", handleNewUser);
app.post("/login", handleLogin);

const PORT = process.env.PORT || 9045;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
