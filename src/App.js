import './App.css';
import {useState} from 'react';
import TaskItem from './components/TaskItem/TaskItem';
import Header from './Header/Header';
import TaskList from './components/TaskList/TaskList';

function App() {
  const [tasks, setTasks] = useState([
    {
      text: 'Do Sainsbury shop',
      completed: false,
      date: '2021-02-22',
      id: '001',
    },
    {
      text: 'Make something nice to eat',
      completed: false,
      date: '2021-02-22',
      id: '002',
    },
    {
      text: 'Dry the washing',
      completed: false,
      date: '2021-02-19',
      id: '003',
    },
    {
      text: 'work with Khadijah',
      completed: true,
      date: '2021-02-19',
      id: '003',
    },
    {
      text: 'Buy some cake',
      completed: true,
      date: '2021-02-19',
      id: '004',
    },
    {
      text: "Complete TR 's react tutorial",
      completed: false,
      date: '2021-01-02',
      id: '005',
    },
  ]);
  const incompleteTask = tasks.filter((task) => !task.completed);
  const completeTask = tasks.filter((task) => task.completed);
  const deleteTask = (id) => {
    const updatedTask = tasks.filter((task) => task.id !== id);
    setTasks(updatedTask);
  };
  const addTask = (text) => {
    const newTask = {
      text: text,
      completed: false,
      date: '2021-12-01',
      id: '007',
    };
    const updatedTask = [...tasks, newTask];
    setTasks(updatedTask);
  };

  return (
    <div>
      <Header taskCount={incompleteTask.length} addTask={addTask} />
      <main className="all-tasks">
        <TaskList
          tasks={incompleteTask}
          deleteTask={deleteTask}
          addTask={addTask}
          status="incomplete"
        />
        <TaskList
          tasks={completeTask}
          deleteTask={deleteTask}
          addTask={addTask}
          status="complete"
        />
      </main>
    </div>
  );
}

export default App;
