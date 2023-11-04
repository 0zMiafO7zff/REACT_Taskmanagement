import Header from "./components/Header";
import AddForm from "./components/Addform";
import Item from "./components/Item";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [task, setTask] = useState(
    JSON.parse(localStorage.getItem("task")) || []
  );
  const [editID, setEditID] = useState(null);
  const [title, setTitle] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  function editTask(id) {
    setEditID(id);
    const editTask = task.find((item) => item.id === id);
    setTitle(editTask.title);
  }

  function saveTask(e) {
    e.preventDefault();
    if (!title) {
      alert("Please Input Info.");
    } else if (editID) {
      const updateTask = task.map((item) => {
        if (item.id === editID) {
          return { ...item, title: title };
        }
        return item;
      });
      setTask(updateTask);
      setEditID(null);
      setTitle("");
    } else {
      // Add new Order
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        title: title,
      };
      setTask([...task, newTask]);
      setTitle("");
    }
  }

  function deleteTask(id) {
    const result = task.filter((item) => item.id !== id);
    setTask(result);
  }
  return (
    <div className={"App "+theme}>
      <Header theme={theme} setTheme={setTheme} />
      <div className="container">
        <AddForm
          title={title}
          setTitle={setTitle}
          saveTask={saveTask}
          editID={editID}
        />
        <section>
          {task.map((data) => (
            <Item
              key={data.id}
              data={data}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
