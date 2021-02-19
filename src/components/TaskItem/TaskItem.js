import React from "react";
import "./TaskItem.css";

const TaskItem = () => {
  return (
    <div>
      <main className="all-tasks">
        <section className="incomplete-tasks">
          <h2 className="heading">Tasks to do:</h2>
          <ul className="task-list">
            <li className="task">
              <p className="task__text">This is a task that needs to be done</p>
              <button className="button">Complete</button>
              <button className="button">Delete</button>
            </li>
          </ul>
        </section>
        <section className="complete-tasks"></section>
      </main>
    </div>
  );
};

export default TaskItem;
