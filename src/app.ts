import express, { json } from "express";
import { router } from "./routes/index";
const app = express();

app.enable("trust proxy");
app.use(json());
router(app);

export default app;
