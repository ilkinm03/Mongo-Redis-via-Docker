import express from "express";
import booksController from "../controllers/books.controller";

const router = express.Router();

router.get("/api/v1/books", booksController.getBooks);

export { router as getBooksRouter };
