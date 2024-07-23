import { Express } from "express";
import { toursRouter } from "./tours.router";
import { categoryRouter } from "./category.router";

const clientRouter = (app: Express): void => {

  app.use("/tours" , toursRouter);

  app.use("/category" , categoryRouter);

};

export default clientRouter;
