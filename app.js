import express from "express";

import { getItems, getItem } from "./db.js";
const app = express();

app.get("/cikktetel", async (req, res) => {
  const items = await getItems();
  res.send(items);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(8080, () => console.log("Server is running on port 8080"));
