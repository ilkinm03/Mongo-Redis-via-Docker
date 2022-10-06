import { Express } from "express";

import { createBookRouter } from "./create-book";
import { getBooksRouter } from "./get-books";

export const router = (app: Express) => {
  app.use(createBookRouter);
  app.use(getBooksRouter);
};
