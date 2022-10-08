import Redis from "ioredis";
import logger from "../logger/logger";
import envConfig from "../config/env-config";

export const redis = new Redis({
  host: envConfig.REDIS_HOST,
});

export const connectRedis = async () => {
  try {
    const PONG = await redis.ping();
    logger.info(`Redis is connected! [${PONG}]`);
  } catch (error) {
    throw error;
  }
};
