import express from "express";
import db from "./config/connectDb.js";
import books from "../models/Book.js";

db.on("error", () => console.log("ERRO"));
db.once("open", () => console.log("Conected"));

const app = express();

// const livros = [
//   { id: 1, titulo: "Senhor dos Aneis" },
//   { id: 2, titulo: "O Hobbit" },
// ];

function findBook(id) {
  return books.findIndex((livro) => livro.id == id);
}

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node");
});

app.get("/books", async (req, res) => {
  const allBooks = await books.find().exec();
  res.status(200).json(allBooks);
});

export default app;
