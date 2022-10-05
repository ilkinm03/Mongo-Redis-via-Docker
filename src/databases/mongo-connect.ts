import mongoose from "mongoose";
import logger from "../logger/logger";

export const connectMongo = async () => {
  const connection = mongoose.connect(process.env.MONGO_URI!);
  return connection;
};

mongoose.connection
  .on("connected", () => {
    logger.info("Connected to the DB!");
  })
  .on("diconnected", () => {
    logger.info("Disconnected from the DB!");
  })
  .on("error", (err) => {
    logger.error(`Error connecting to the DB: ${err}`);
  });
