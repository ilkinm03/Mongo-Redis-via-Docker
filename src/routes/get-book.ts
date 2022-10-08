import express from "express";
import booksController from "../controllers/books.controller";

const router = express.Router();

router.get("/api/v1/book/:id", booksController.getBook);

export { router as getBookRouter };
