import React from 'react';
import AddTaskItem from '../components/AddTaskItem/AddTaskItem';

const Header = ({taskCount, addTask}) => {
  return (
    <>
      <header className="header">
        <h1 className="heading">To Do!</h1>
        <AddTaskItem addTask={addTask} />
        <p className="outstanding-tasks">
          You have {taskCount} tasks to complete
        </p>
      </header>
    </>
  );
};

export default Header;
