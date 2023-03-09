const app = require("./app");

// Handling Uncaught Exception:

process.on("uncaughtException", (err) => {
  console.log(`Error ${err.message}`);
  console.log(`Shutting down the server due to unhandled exception`);
  process.exit(1);
});

// Config:
// if (process.env.NODE_ENV !== "PRODUCTION") {

// }
const mongoose = require("mongoose");
//Connecting to database:
const connectDataBase = () => {
  mongoose
    .connect(
      "mongodb+srv://Hammad:hxaiidmHRhG5XzXn@cluster0.dcgja.mongodb.net/mksracingreal?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
      }
    )
    .then((data) => {
      console.log(`Mongodb connected with server ${data.connection.host}`);
    });
};
connectDataBase();
const server = app.listen(5000, () => {
  console.log(`Server is working on port http:localhost:${5000}`);
});

// Unhandled Promise Rejection:

process.on("unhandledRejection", (err) => {
  console.log(`Error ${err.message}`);
  console.log(`Shutting down the server due to Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
