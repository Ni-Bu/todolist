import { React, useState } from "react";
import OpenTaskList from "./openTaskList";
import FinishedTaskList from "./finishedTaskList";
import TaskInput from "./taskInput";

function TaskPage(props) {
  const [listItems, setListItems] = useState([]);
  return (
    <div>
      <h1>task page</h1>
      {/* contains the value from the input field */}
      {props.location.state}
      <TaskInput listItems={listItems} setListItems={setListItems}></TaskInput>

      <OpenTaskList
        listItems={listItems}
        setListItems={setListItems}
      ></OpenTaskList>
      <FinishedTaskList
        listItems={listItems}
        setListItems={setListItems}
      ></FinishedTaskList>
    </div>
  );
}

export default TaskPage;
