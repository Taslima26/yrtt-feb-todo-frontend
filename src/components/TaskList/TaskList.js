import React, {useState} from 'react';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({tasks, status, deleteTask, id}) => {
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
              deleteTask={deleteTask}
              id={task.id}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default TaskList;
