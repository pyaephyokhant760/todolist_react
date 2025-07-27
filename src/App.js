import logo from "./logo.svg";
import "./App.css";
import List from "./Componest/List";
import Form from "./Componest/Form";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { api } from "./api/apiResource";

function App() {
  const [test, SetTest] = useState([]);
  const fetchData = async () => {
    const data = await api.get("/posts");

    // console.log(data);
    SetTest(data.data);
  };

  useEffect(() => {
    fetchData();
  }, [test]);

  const submitTask = async (userTask) => {
    const data = {
      
      title: userTask,
      views: 100,
      complete: false,
    };
    const res = await api.post("posts", data);
  };
  const deleteTask = async (tt_id) => {
    try {
      const res = await api.delete(`posts/${tt_id}`);
      console.log("Deleted", res.data);
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };
  const updateTask = async (tt_id, complete) => {
    console.log(tt_id, complete);
    const res = await api.patch(`posts/${tt_id}`, {
      complete: complete,
    });
  };
  return (
    <div className="App mt-5">
      <Form submitTask={submitTask} />
      <List test={test} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
  );
}

export default App;
