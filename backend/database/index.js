const mongoose = require("mongoose");

const MONGO_URL = "mongodb://localhost:27017/";

const db = async () => {
  await mongoose
    .connect(MONGO_URL)
    .then(() => console.log("DB FUNCIONANDO"))
    .catch((error) => console.error(error));
};

module.exports = db