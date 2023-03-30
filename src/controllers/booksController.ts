import books from "@models/Book";
import type { Request, Response } from "express";

export default class BookController {
  static listBooks = async (req: Request, res: Response) => {
    try {
      const allBooks = await books.find().exec();
      res.send({ message: allBooks });
    } catch {
      new Error("Erro");
    }
  };
}
