"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/todo");
      setTasks(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const addTask = async (e) => {
    e.preventDefault();
    try {
      if (newTask.trim() !== "") {
        const response = await axios.post("http://localhost:8000/todo", {
          title: newTask,
          description: "Temp",
        });
        setNewTask("");
        fetchData();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  const removeTask = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/todo/${id}`);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  const EditTask = async (id) => {
    let text = prompt("Enter the updated task you want?");
    try {
      if (text.trim() !== "") {
        const response = await axios.patch(`http://localhost:8000/todo/${id}`, {
          title: text,
          description: "Temp",
        });
        text = "";
        fetchData();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <span onClick={() => toggleTask(task._id)}>{task.title}</span>
            <button onClick={() => removeTask(task._id)}>Remove</button>
            <button onClick={() => EditTask(task._id)}>Edit</button>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .todo-list {
          max-width: 400px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        h1 {
          text-align: center;
          color: #333;
        }
        form {
          display: flex;
          margin-bottom: 20px;
        }
        input {
          flex-grow: 1;
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ddd;
          border-radius: 4px 0 0 4px;
        }
        button {
          padding: 10px 15px;
          font-size: 16px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 0 4px 4px 0;
          cursor: pointer;
        }
        button:hover {
          background-color: #0051cc;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          margin-bottom: 10px;
          background-color: #f4f4f4;
          border-radius: 4px;
        }
        li.completed span {
          text-decoration: line-through;
          color: #888;
        }
        li button {
          background-color: #ff4d4d;
          border-radius: 4px;
        }
        li button:hover {
          background-color: #cc0000;
        }
      `}</style>
    </div>
  );
}
