import React from "react";
import AddTaskItem from "../components/AddTaskItem/AddTaskItem";

const Header = ({ taskCount }) => {
  return (
    <>
      <header className="header">
        <h1 className="heading">To Do!</h1>
        <AddTaskItem />
        <p className="outstanding-tasks">
          You have {taskCount} tasks to complete
        </p>
      </header>
    </>
  );
};

export default Header;
