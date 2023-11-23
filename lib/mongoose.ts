import mongoose from "mongoose";

let isConnetcted: boolean = false;

export const connectTodatabase = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) return console.log("MISSING MONGODB URL");
  if (isConnetcted) {
    console.log("Already connected to database");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "devflow",
    });
    isConnetcted = true;
    console.log("Connected to database");
  } catch (err) {
    console.log(err);
  }
};
