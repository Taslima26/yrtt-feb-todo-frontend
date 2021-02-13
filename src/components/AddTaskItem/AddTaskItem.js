import React from "react";
import "./AddTaskItem.css";

const AddTaskItem = () => {
  return (
    <>
      <div className="add-task__actions">
        <label htmlFor="add-task-input" className="visuallyhidden">
          Add new to do task
        </label>
        <input id="add-task-input" className="add-task__input-field"></input>
        <button className="button">Add</button>
      </div>
    </>
  );
};

export default AddTaskItem;
