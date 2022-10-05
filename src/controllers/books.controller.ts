import { Request, Response, NextFunction } from "express";
import logger from "../logger/logger";
import { BookAttrs } from "../models/books.model";
import BookService from "../services/book.service";

class BookController {
  async createBook(req: Request, res: Response, next: NextFunction) {
    try {
      logger.debug("BookController.createBook -- start");
      const bookData: BookAttrs = req.body;
      const book = await BookService.createBook(bookData);
      res.status(201).send({ book });
      logger.debug("BookController.createBook -- success");
    } catch (error) {
      next(error);
    }
  }
}

export default new BookController();
