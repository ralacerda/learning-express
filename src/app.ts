import express from "express";
import routes from "#routes/index.js";
import db from "./config/connectAtlas.js";

db.on("error", () => console.error("Database conection error"));
db.once("open", () => console.info("Successfully connected to the database"));

const app = express();
routes(app);

export default app;
