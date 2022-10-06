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

  async getBooks(): Promise<BookDoc[]> {
    logger.debug("BookController.getBooks.BookService -- start");
    const books = await Book.findBooks();
    logger.debug("BookController.getBooks.BookService -- success");
    return books;
  }
}

export default new BookService();
