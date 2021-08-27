import React from "react";

function OpenTaskList(props) {
  let output;
  const renderOpenTasks = (tasks) => {
    if (tasks.length > 0) {
      tasks.map((task) => {
        console.log(task);
        if (task.checked === false) {
          return (
            <label class="checkbox-container">
              {console.log(task.checked === false)}
              <input type="checkbox" value={task.data} checked={task.checked} />
              <span class="label-text">{task.data}</span>
            </label>
          );
        }
      });
    }
  };
  return (
    <div>
      Open Task List
      {(output = renderOpenTasks(props.listItems))}
      {console.log("output", output)}
      {console.log(props)}
      {console.log(props.listItems)}
    </div>
  );
}

export default OpenTaskList;
