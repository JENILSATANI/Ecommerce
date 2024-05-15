import mongoose from "mongoose";

let databaseUrl = process.env.DATABASE_URL;
console.log('databaseUrl :>> ', databaseUrl);

mongoose
  .set("strictQuery", true)
  .connect(databaseUrl)
  .then(() => {
    console.log("DB connection established successfully");
  })
  .catch((err) => {
    console.log("Error occured in db connection", err);
  });
