import books from "../models/Book";

class BookController {
  static listBooks = async (req, res) => {
    try {
      books.find().exec;
    } catch {
      new Error("Erro");
    }
  };
}
