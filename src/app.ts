import express from "express";
import db from "./config/connectDb";
import bookRouter from "@routes/bookRoutes";

db.on("error", () => console.log("ERRO"));
db.once("open", () => console.log("Conected"));

const app = express();

app.use("/books", bookRouter);

export default app;
