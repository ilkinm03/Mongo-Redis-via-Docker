import Redis from "ioredis";
import logger from "../logger/logger";
import envConfig from "../config/env-config";

export const connectRedis = async () => {
  try {
    const redis = new Redis({
      host: envConfig.REDIS_HOST,
    });
    const PONG = await redis.ping();
    logger.info(`Redis is connected! [${PONG}]`);
  } catch (error) {
    throw error;
  }
};
