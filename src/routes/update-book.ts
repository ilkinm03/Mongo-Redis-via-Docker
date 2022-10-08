import express from "express";
import booksController from "../controllers/books.controller";

const router = express.Router();

router.patch("/api/v1/book/:id", booksController.updateBook);

export { router as updateBookRouter };
