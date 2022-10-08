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

  async getBooks(_req: Request, res: Response, next: NextFunction) {
    try {
      logger.debug("BookController.getBooks -- start");
      const books = await BookService.getBooks();
      logger.debug("BookController.getBooks -- success");
      res.status(200).send({ books });
    } catch (error) {
      next(error);
    }
  }

  async getBook(req: Request, res: Response, next: NextFunction) {
    try {
      logger.debug("BookController.getBook -- start");
      const { id } = req.params;
      const book = await BookService.getBook(id);
      logger.debug("BookController.getBook -- success");
      res.status(200).send({ book });
    } catch (error) {
      next(error);
    }
  }
}

export default new BookController();
