import express from "express";

const app = express();

app.listen(3000, () => {
  console.log(`Server listening to PORT NO ${3000}`);
});
