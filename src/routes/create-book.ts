import express from "express";
import booksController from "../controllers/books.controller";

const router = express.Router();

router.post("/api/v1/book", booksController.createBook);

export { router as createBookRouter };
