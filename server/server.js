// server.js
const express = require("express");
const path = require("path");
const cors = require("cors");
const logger = require("morgan");
const cookieParser = require('cookie-parser');
const app = express();

// Configuration
const PORT = 8080;
const CLIENT_BUILD_PATH = path.join(__dirname, "../client/build");
require("./config/database");

app.use(express.json());
app.use(logger("dev"));
app.use(cors({origin: "http://localhost:3000", credentials: true}));
app.use(cookieParser());

// Routes
const routes = require("./src/routes");
app.use("/", routes);
// Static files
app.use(express.static(CLIENT_BUILD_PATH));

// Server React Client
app.get("/", function (req, res) {
  res.sendFile(path.join(CLIENT_BUILD_PATH, "index.html"));
});

app.listen(PORT, function () {
  console.log(`%%%%%%%====== Server Listening on ${PORT} =======%%%%%%%%`);
});
