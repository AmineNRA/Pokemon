import express from "express";
import * as dotenv from "dotenv";
import router from "./app/router.js";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.set("view engine", "ejs");
app.set("views", "./app/views/");

app.use(express.static("./public"));
app.use(router);

app.use((req, res) => {
  // res.status(404).send(404, `Page non trouvée`);
  res.status(404);
});

app.listen(port, () => {
  console.log(`app sur http://localhost:${port}/`);
});