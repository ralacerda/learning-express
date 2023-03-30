import express from "express";
import bookController from "@controllers/booksController";

const router = express.Router();

router
  .get("/", bookController.getAllBooks)
  .get("/:id", bookController.getSingleBook);

export default router;
