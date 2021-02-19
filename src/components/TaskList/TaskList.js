import React, { useState } from "react";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({ tasks, status }) => {
  return (
    <div>
      <section className={`${status}-tasks`}>
        <h2 className="heading">Tasks to do:</h2>
        <ul className="task-list">
          {tasks.map((task) => (
            <TaskItem
              text={task.text}
              key={task.id}
              complete={task.completed}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default TaskList;
