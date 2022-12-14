import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import Connection from "./database/db.js";
import Routes from "./routes/route.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Routes);

const PORT = process.env.PORT || 8800;

const URL = process.env.DATABASE;

Connection(URL);

app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);
