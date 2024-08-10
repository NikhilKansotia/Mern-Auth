import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoute from "./routes/user.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Database connected Successfull");
  })
  .catch((err) => {
    console.log("Error in connecting to database", err);
  });

const app = express();

//routes
app.use("/api/v1/user", userRoute);

app.listen(3000, () => {
  console.log(`Server listening to PORT NO ${3000}`);
});
