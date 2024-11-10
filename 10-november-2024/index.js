const express = require("express");
const app = express();
const db = require("./config/db");
const Todo = require("./schema/todo");
const User = require("./schema/User");

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

    const data = await Todo.findByIdAndDelete(id);

    res.status(200).send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/auth/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

    const data = new User({ username, password });
    const response = await data.save();

    res.status(201).send(response);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/auth/signin", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user =await User.findOne({ username });

    if (!user) {
      return res.status(400).send("User not found");
    }

    if (user.username !== username || user.password !== password) {
      res.status(400).send("credentials incorrect");
    }

    res.status(201).send(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// app.post("/auth/signin", async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Find the user by username
//     const user = await User.findOne({ username });

//     if (!user) {
//       return res.status(400).send("User not found");
//     }

//     if (user.password !== password) {
//       return res.status(400).send("Credentials incorrect");
//     }

//     res.status(200).send(user);  // Return user data or a token
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Internal Server Error");
//   }
// });

app.listen(PORT, () => {
  console.log(`Server is established at ${PORT}`);
});
