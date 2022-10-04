import Redis from "ioredis";

export const connectRedis = async () => {
  try {
    const redis = new Redis({
      host: process.env.REDIS_HOST,
    });
    const PONG = await redis.ping();
    console.log(`Redis is connected! [${PONG}]`);
  } catch (error) {
    throw error;
  }
};
