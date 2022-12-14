import mongoose from "mongoose";
import logger from "../logger/logger";
import envConfig from "../config/env-config";

export const connectMongo = async () => {
  const mongoURI = `mongodb://${envConfig.MONGO_USERNAME}:${envConfig.MONGO_PASSWORD}@${envConfig.MONGO_HOST}/?authSource=admin`;
  const connection = mongoose.connect(mongoURI);
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
