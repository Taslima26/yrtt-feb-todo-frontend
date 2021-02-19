import React from "react";
import "./TaskItem.css";

const TaskItem = ({ completeTask, incompleteTask }) => {
  console.log(completeTask);
  return (
    <div>
      <main className="all-tasks">
        <section className="incomplete-tasks">
          <h2 className="heading">Tasks to do:</h2>
          <ul className="task-list">
            {completeTask.map((task) => (
              <li className="task">
                <p className="task__text">{task.text}</p>
                <button className="button">Complete</button>
                <button className="button">Delete</button>
              </li>
            ))}
          </ul>
        </section>
        <section className="complete-tasks"></section>
      </main>
    </div>
  );
};

export default TaskItem;
