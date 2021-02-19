import "./App.css";
import { useState } from "react";
import AddTaskItem from "./components/AddTaskItem/AddTaskItem";
import TaskItem from "./components/TaskItem/TaskItem";

function App() {
  const [tasks, setTasks] = useState();

  /*[
    {text:"Do Sainsbury shop",completed:false,date:"2021-02-22"},
    {text:"Make something nice to eat,campleted:false,date:"2021-02-22"},
    {text:"Dry the washing",completed:false,date:"2021-02-19"}
  ]

  */
  return (
    <div className="App">
      <div className="body">
        <header className="header">
          <h1 className="heading">To Do!</h1>
          <AddTaskItem />
          <p className="outstanding-tasks">You have 3 tasks to complete</p>
        </header>
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </div>
    </div>
  );
}

export default App;
