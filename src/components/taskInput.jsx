import { React, useState } from "react";
//store all items in the list with property checked or not in listContext
//and then for each
//for each checked one store it in the open list
//for each where checked is false store it in the finished task list
function TaskInput(props) {
  const [currentItem, setCurrentItem] = useState("");

  const handleChange = (event) => {
    setCurrentItem(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const temp = [...props.listItems];
    temp.push({ data: currentItem, checked: false });
    props.setListItems(temp);
    // props.setListItems([
    //   ...props.ListItems,
    //   { data: currentItem, checked: false },
    // ]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={currentItem} onChange={handleChange} />
      <button>Enter</button>
    </form>
  );
}

export default TaskInput;
