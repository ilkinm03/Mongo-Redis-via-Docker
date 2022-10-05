import app from "./app";
import { connectMongo } from "./databases/mongo-connect";
import { connectRedis } from "./databases/redis-connect";
import logger from "./logger/logger";

const PORT = process.env.PORT || 3000;

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI must be defined!");
}

connectMongo().then(async () => {
  await connectRedis();
  app.listen(PORT, () => {
    logger.info(`Listening on port ${PORT}...`);
  });
});
