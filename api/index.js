const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");

//Routes
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

//connect to mongodb using mongoose
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongodb");
  }
);

//middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

//user route
app.use("/api/users", userRoute);

//authendication route\
app.use("/api/auth", authRoute);

//Server port
app.listen(5000, () => {
  console.log("server started at 5000");
});
