import "reflect-metadata";
import "./src/config/db";
import express from "express";
import routes from "./src/routes";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.use(routes);
app.listen(8080, () => console.log("Server running on 8080"))

export default app;
