import React from 'react';
import './TaskItem.css';

const TaskItem = ({complete, text, id, deleteTask}) => {
  return (
    <li className={`task ${complete ? 'task--complete' : ''}`}>
      <p className="task__text">{text}</p>
      {complete === false && <button className="button">Complete</button>}
      <button
        className="button"
        onClick={() => {
          deleteTask(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
