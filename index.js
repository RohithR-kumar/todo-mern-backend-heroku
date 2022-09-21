const express = require("express");
const connectDb = require("./services/db");
connectDb();
const uuid = require("uuid");

const app = express();

app.use(express.json());

const todoRouter = require("./controllers/Todo.controller");
app.use("/api", todoRouter);

app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

const port = process.env.PORT || 5000;
app.listen(port);
