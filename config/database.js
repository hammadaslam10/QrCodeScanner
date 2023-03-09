const mongoose = require("mongoose");

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

module.exports = connectDataBase;
