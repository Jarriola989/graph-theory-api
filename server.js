import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { routes } from "./routes.js";

const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

app.listen(port, () =>
  console.log(`Graph Theory app listening on port ${port}!`)
);

// module.exports = app;
