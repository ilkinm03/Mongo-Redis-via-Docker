import express from "express";
import booksController from "../controllers/books.controller";

const router = express.Router();

router.delete("/api/v1/book/:id", booksController.deleteBook);

export { router as deleteBookRouter };
