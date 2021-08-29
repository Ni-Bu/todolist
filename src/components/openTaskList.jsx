import { React } from "react";

function OpenTaskList(props) {
  const handleChange = (currentItem) => {
    console.log(currentItem);
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
      Open Task List
      {props.listItems.map((item) => {
        return (
          item.isChecked === false && (
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

export default OpenTaskList;
