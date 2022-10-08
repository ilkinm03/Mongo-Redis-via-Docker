import { Express } from "express";

import { createBookRouter } from "./create-book";
import { getBooksRouter } from "./get-books";
import { getBookRouter } from "./get-book";
import { updateBookRouter } from "./update-book";

export const router = (app: Express) => {
  app.use(createBookRouter);
  app.use(getBooksRouter);
  app.use(getBookRouter);
  app.use(updateBookRouter);
};
