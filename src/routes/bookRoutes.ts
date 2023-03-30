import express from "express";
import bookController from "@controllers/booksController";

const router = express.Router();

router.get("/", bookController.listBooks);

export default router;
