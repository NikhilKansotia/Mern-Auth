import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

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

app.listen(3000, () => {
  console.log(`Server listening to PORT NO ${3000}`);
});
