import books from "../models/Book";
import type { Request, Response } from "express";

export default class BookController {
  static getAllBooks = async (req: Request, res: Response) => {
    try {
      const allBooks = await books.find();
      res.send({ message: allBooks });
    } catch (e) {
      res.status(400).send({ message: `Error: ${e}` });
    }
  };

  static getSingleBook = async (req: Request, res: Response) => {
    try {
      const singleBook = await books.findById(req.params.id);
      res.send({ message: singleBook });
    } catch (e) {
      res.status(400).send({ message: `Error: ${e}` });
    }
  };

  static updateBook = async (req: Request, res: Response) => {
    try {
      const result = await books.findByIdAndUpdate(req.params.id, req.body);
      res.send({ message: `Updated book: ${result}` });
    } catch (e) {
      res.status(400).send({ message: `Error: ${e}` });
    }
  };

  static addBook = async (req: Request, res: Response) => {
    try {
      let newBook = new books(req.body);
      newBook.save();
      res.send({ message: "book created" });
    } catch (e) {
      res.status(400).send({ message: `Error: ${e}` });
    }
  };

  static removeBook = async (req: Request, res: Response) => {
    try {
      const result = await books.findByIdAndDelete(req.params.id);
      res.send({ message: result });
    } catch (e) {
      res.status(400).send({ message: `Error: ${e}` });
    }
  };
}
