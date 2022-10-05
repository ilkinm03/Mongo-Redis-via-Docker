import logger from "../logger/logger";
import { Book, BookAttrs, BookDoc } from "../models/books.model";

class BookService {
  async createBook(bookData: BookAttrs): Promise<BookDoc> {
    logger.debug("BookController.createBook.BookService -- start");
    const book: BookDoc = Book.build(bookData);
    await book.save();
    logger.debug("BookController.createBook.BookService -- success");
    return book;
  }
}

export default new BookService();