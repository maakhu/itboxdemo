import express from "express";
import cors from "cors";

import { getItems, getItem, getItemsInRentByDate } from "./db.js";
const app = express();
app.use(express.json());

app.get("/cikktetelek", async (req, res) => {
  const items = await getItems();
  res.send(items);
});

app.get("/cikktetelek/:id", async (req, res) => {
  const id = req.params.id;
  const item = await getItem(id);
  res.send(item);
});

app.get("/berbeadottak/:date", async (req, res) => {
  const date = req.params.date;
  console.log("date " + date);
  const inRent = await getItemsInRentByDate(date);
  res.send(inRent);
});

//error handling should be implemented detailedly, but we don't need it now based on the task, basic error handling below
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// app.use(cors({ "Access-Control-Allow-Origin": "*" }));

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.listen(8080, () => console.log("Server is running on port 8080"));
