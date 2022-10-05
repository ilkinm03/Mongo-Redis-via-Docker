import Redis from "ioredis";
import logger from "../logger/logger";

export const connectRedis = async () => {
  try {
    const redis = new Redis({
      host: process.env.REDIS_HOST,
    });
    const PONG = await redis.ping();
    logger.info(`Redis is connected! [${PONG}]`);
  } catch (error) {
    throw error;
  }
};