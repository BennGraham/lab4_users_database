const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/UserRoute");

const dotenv = require("dotenv");
dotenv.config();

const DB_CONNECTION = process.env.MONGODB_URL;

const app = express();
app.use(express.json());

mongoose
  .connect(DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/users", userRoute);

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
