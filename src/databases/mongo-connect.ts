import mongoose from "mongoose";

export const connectMongo = async () => {
  const connection = mongoose.connect(process.env.MONGO_URI!);
  return connection;
};

mongoose.connection
  .on("connected", () => {
    console.log("Connected to the DB!");
  })
  .on("diconnected", () => {
    console.log("Disconnected from the DB!");
  })
  .on("error", (err) => {
    console.log(`Error connecting to the DB: ${err}`);
  });
