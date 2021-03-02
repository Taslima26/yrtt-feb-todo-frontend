import React, {useState} from 'react';
import './AddTaskItem.css';

const AddTaskItem = ({addTask}) => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleClick = () => {
    addTask(text);
    setText('');
  };
  return (
    <>
      <div className="add-task__actions">
        <label htmlFor="add-task-input" className="visuallyhidden">
          Add new to do task
        </label>
        <input
          id="add-task-input"
          className="add-task__input-field"
          value={text}
          onChange={handleChange}
        ></input>
        <button className="button" onClick={handleClick}>
          Add
        </button>
      </div>
    </>
  );
};

export default AddTaskItem;
