import express, { Express } from "express";
import bookRoutes from "#routes/bookRoutes.js";

const routes = (app: Express) => {
  app.use(express.json()).use("/books", bookRoutes);
};

export default routes;
