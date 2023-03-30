import express from "express";
import db from "./config/connectDb";
import routes from "@routes/index";

db.on("error", () => console.log("ERRO"));
db.once("open", () => console.log("Conected"));

const app = express();
routes(app);

export default app;
