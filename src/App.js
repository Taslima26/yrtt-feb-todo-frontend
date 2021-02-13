import "./App.css";
import AddTaskItem from "./components/AddTaskItem/AddTaskItem";
import TaskItem from "./components/TaskItem/TaskItem";

function App() {
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
