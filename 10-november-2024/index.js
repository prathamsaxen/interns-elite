const express = require("express");
const app = express();
const db = require("./config/db");
const Todo = require("./schema/todo");

app.use(express.json());
db();

const PORT = 8000;

app.get("/test", (req, res) => {
  res.send("Backend is UP!");
});

app.get("/todo", async (req, res) => {
  try {
    const todo = await Todo.find();
    res.status(201).send(todo);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/todo", async (req, res) => {
  try {
    const { title, description } = req.body;

    const data = new Todo({ title, description });
    const response = await data.save();

    res.status(201).send(response);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.patch("/todo/:id", async (req, res) => {
  try {
    const { title, description } = req.body;
    const { id } = req.params;

    const data = await Todo.findByIdAndUpdate(id, { title, description }, { new: true });

    if (!data) {
      return res.status(404).send("Todo not found");
    }

    res.status(200).send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.delete("/todo/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Todo.findByIdAndDelete( id );

    res.status(200).send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is established at ${PORT}`);
});
