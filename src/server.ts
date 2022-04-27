import express, { json } from "express";
import * as dotenv from "dotenv";
import { router } from "./routes";
import { db } from "./repository/db";

dotenv.config();
const app = express();
app.use(json());
app.use(router);

app.listen(3000, async () => {
  await db.sync();
  console.log(`Aplicação ${process.env.PROJECT_NAME} rodando na porta 3000`);
});
