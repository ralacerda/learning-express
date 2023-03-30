import books from "@models/Book";
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
    } catch {
      new Error("Erro");
    }
  };
}
