import app from "./app";
import { connectMongo } from "./databases/mongo-connect";
import { connectRedis } from "./databases/redis-connect";

const PORT = process.env.PORT || 3000;

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI must be defined!");
}

connectMongo().then(async () => {
  await connectRedis();
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
});
