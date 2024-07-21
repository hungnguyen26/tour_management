import express, { Express, Request, Response } from "express";
import sequelize from "./config/database";

sequelize;        

const app: Express = express();
const port: number = 3000;

app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");


app.get("/tours", (req: Request, res: Response) => {
  res.render("client/pages/tours/index.pug");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
