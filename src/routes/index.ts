import { Express } from "express";

import { createBookRouter } from "./create-book";
import { getBooksRouter } from "./get-books";
import { getBookRouter } from "./get-book";

export const router = (app: Express) => {
  app.use(createBookRouter);
  app.use(getBooksRouter);
  app.use(getBookRouter);
};
