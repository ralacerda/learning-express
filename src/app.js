import express from "express";
import db from "./config/connectDb.js";

db.on("error", console.log.bind(console, "ERRO"));
db.once("open", () => console.log("Conected"));

const app = express();

const livros = [
  { id: 1, titulo: "Senhor dos Aneis" },
  { id: 2, titulo: "O Hobbit" },
];

function findBook(id) {
  return livros.findIndex((livro) => livro.id == id);
}

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.put("/livros/:id", (req, res) => {
  const index = findBook(req.params.id);
  livros[index].titulo = req.body.titulo;
});

export default app;
