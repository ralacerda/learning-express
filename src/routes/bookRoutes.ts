import express from "express";
import bookController from "../controllers/booksController";

const router = express.Router();

router
  .get("/", bookController.getAllBooks)
  .get("/:id", bookController.getSingleBook)
  .put("/:id", bookController.updateBook)
  .post("/", bookController.addBook)
  .delete("/:id", bookController.removeBook);

export default router;
