import express, { Express } from "express";
import dotenv from "dotenv";
import clientRouter from "./routers/client/index.router";

dotenv.config();

const app: Express = express();
const port: number | string = process.env.PORT ||  3000;

app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

// client router
clientRouter(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
