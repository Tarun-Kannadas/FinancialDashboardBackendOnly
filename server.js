const app = require("./src/app");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

console.log("MONGO_URI exists:", !!MONGO_URI);

if (!MONGO_URI) {
  console.error("MONGO_URI is not defined");
  process.exit(1);
}

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("DB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("DB Connection Failed:", err.message);
  });