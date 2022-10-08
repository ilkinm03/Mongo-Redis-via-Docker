import { redis } from "../databases/redis-connect";
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
    const cache = await redis.get("books");
    let books: BookDoc[];
    if (!cache) {
      books = await Book.findBooks();
      await redis.set("books", JSON.stringify(books));
    } else {
      books = JSON.parse(cache);
    }
    logger.debug("BookController.getBooks.BookService -- success");
    return books;
  }

  async getBook(id: string): Promise<[BookDoc]> {
    logger.debug("BookController.getBook.BookService -- start");
    const cache = await redis.get(id);
    let book: [BookDoc];
    if(!cache) {
      book = await Book.findBookById(id);
      await redis.set(id, JSON.stringify(book));
    } else {
      book = JSON.parse(cache);
    }
    logger.debug("BookController.getBook.BookService -- success");
    return book;
  }
}

export default new BookService();
