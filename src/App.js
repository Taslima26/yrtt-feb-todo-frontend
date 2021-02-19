import "./App.css";
import { useState } from "react";
import AddTaskItem from "./components/AddTaskItem/AddTaskItem";
import TaskItem from "./components/TaskItem/TaskItem";

function App() {
  const [tasks, setTasks] = useState([
    {
      text: "Do Sainsbury shop",
      completed: false,
      date: "2021-02-22",
      id: "001",
    },
    {
      text: "Make something nice to eat",
      completed: false,
      date: "2021-02-22",
      id: "002",
    },
    {
      text: "Dry the washing",
      completed: false,
      date: "2021-02-19",
      id: "003",
    },
    {
      text: "work with Khadijah",
      completed: true,
      date: "2021-02-19",
      id: "003",
    },
    {
      text: "Buy some cake",
      completed: true,
      date: "2021-02-19",
      id: "004",
    },
    {
      text: "Complete TR 's react tutorial",
      completed: false,
      date: "2021-01-02",
      id: "005",
    },
  ]);
  const incompleteTask = tasks.filter((task) => !task.completed);
  const completeTask = tasks.filter((task) => task.completed);
  console.log(completeTask);
  console.log(incompleteTask);
  /*[
    {text:"Do Sainsbury shop",completed:false,date:"2021-02-22"},
    {text:"Make something nice to eat,campleted:false,date:"2021-02-22"},
    {text:"Dry the washing",completed:false,date:"2021-02-19"}
  ]

  */
  return (
    <div>
      <header className="header">
        <h1 className="heading">To Do!</h1>
        <AddTaskItem />
        <p className="outstanding-tasks">You have 3 tasks to complete</p>
      </header>
      <main className="all-tasks">
        <section className="incomplete-tasks">
          <h2 className="heading">Tasks to do:</h2>
          <ul className="task-list">
            <TaskItem complete={false} />
            <TaskItem complete={false} />
            <TaskItem complete={false} />
          </ul>
        </section>
        <section className="complete-tasks">
          <h2 className="heading">Complete tasks:</h2>
          <ul className="task-list">
            <TaskItem complete={true} />
            <TaskItem complete={true} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
