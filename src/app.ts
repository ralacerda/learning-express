import express from "express";
import routes from "./routes";
import db from "./config/connectAtlas";

db.on("error", () => console.log("ERRO"));
db.once("open", () => console.log("Conected"));

const app = express();
routes(app);

export default app;
