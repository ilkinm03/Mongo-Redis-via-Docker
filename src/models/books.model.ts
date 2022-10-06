import mongoose from "mongoose";

interface BookAttrs {
  name: string;
  author: string;
  genre: string;
  language?: string;
  publishYear?: string;
  pages?: number;
}

interface BookDoc extends mongoose.Document {
  name: string;
  author: string;
  genre: string;
  language?: string;
  publishYear?: string;
  pages?: number;
}

interface BookModel extends mongoose.Model<BookDoc> {
  build(attrs: BookAttrs): BookDoc;
  findBooks(): Promise<BookDoc[]>;
}

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    language: String,
    publishYear: String,
    pages: Number,
  },
  {
    toJSON: {
      transform(_doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
      versionKey: false,
    },
  }
);

bookSchema.statics.build = (attrs: BookAttrs) => new Book(attrs);
bookSchema.statics.findBooks = async () => await Book.find();

const Book = mongoose.model<BookDoc, BookModel>("Book", bookSchema);

export { Book, BookAttrs, BookDoc };
