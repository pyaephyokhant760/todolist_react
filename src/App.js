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
    SetTest(data.data)
  };

  useEffect(() => {
    fetchData();
  }, []);

   const  submitTask = (userTask) => {
   const data =  { "id": 1000, "title": userTask, "views": 100 }
   console.log(data);
  }

  
  
  return (
    <div className="App mt-5">
      <Form submitTask={submitTask}/>
      <List test={test}/>
    </div>
  );
}

export default App;
