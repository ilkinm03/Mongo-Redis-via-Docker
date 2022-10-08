import app from "./app";
import { connectMongo } from "./databases/mongo-connect";
import { connectRedis } from "./databases/redis-connect";
import logger from "./logger/logger";

const PORT = process.env.PORT || 3000;

connectMongo().then(async () => {
  await connectRedis();
  app.listen(PORT, () => {
    logger.info(`Listening on port ${PORT}...`);
  });
});
