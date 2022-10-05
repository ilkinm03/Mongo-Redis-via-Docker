import { Express } from "express";
import { createBookRouter } from "./create-book";

export const router = (app: Express) => {
  app.use(createBookRouter);
};
