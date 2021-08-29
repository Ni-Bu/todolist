import React from "react";

function FinishedTaskList(props) {
  const handleChange = (currentItem) => {
    const newList = props.listItems.map((item) => {
      if (item.ID === currentItem.ID) {
        currentItem.isChecked = !currentItem.isChecked;
      }
      return item;
    });
    props.setListItems(newList);
    console.log("item", newList);
  };

  return (
    <div>
      Completed Tasks
      {props.listItems.map((item) => {
        return (
          item.isChecked === true && (
            <label key={item.ID}>
              <input
                type="checkbox"
                onChange={() => handleChange(item)}
                checked={item.isChecked}
              ></input>
              <span>{item.data}</span>
            </label>
          )
        );
      })}
    </div>
  );
}

export default FinishedTaskList;
