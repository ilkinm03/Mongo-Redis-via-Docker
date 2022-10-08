export default {
  MONGO_USERNAME: process.env.MONGO_USERNAME,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  MONGO_HOST: process.env.MONGO_HOST || "mongo",

  REDIS_HOST: process.env.REDIS_HOST || "redis"
};
