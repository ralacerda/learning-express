import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: true },
  author: { type: String, required: true },
  numberOfPages: { type: Number },
});

const books = mongoose.model("books", bookSchema);

export default books;
