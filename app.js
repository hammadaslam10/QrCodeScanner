const express = require("express");
const app = express();
// const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/ErrorCallBackReturn");
const bodyParser = require("body-parser");
// const fileUpload = require("express-fileupload");
// const path = require("path");

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(express.json());
// app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(fileUpload());

//Route Imports:
const QrSchemaRoute = require("./routes/QrSchemaRoute");
app.use("/api/v1", QrSchemaRoute);
// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
// });

//Middleware For Errors:

app.use(errorMiddleware);

module.exports = app;