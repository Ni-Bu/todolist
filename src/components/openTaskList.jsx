import React from "react";

function OpenTaskList(props) {
  const renderInput = () => {
    // if (item.checked === false)
    //   return (
    //     <React.Fragment>
    //       <input type="checkbox" checked={item.checked} />
    //       {item.data}
    //     </React.Fragment>
    //   );
    for (let i = 0; i < props.listItems.length; i++) {
      console.log("inside loop", props.listItems);
      console.log("inside loop", props.listItems[i].data);
      <div>
        <input type="checkbox" name={props.listItems[i].data} />
        <label for={props.listItems[i].data}>{props.listItems[i].data}</label>
      </div>;
    }
  };
  const returnData = (data) => {
    return data;
  };

  return (
    <div>
      Open Task List
      {console.log(props.listItems)}
      {renderInput()}
      {props.listItems.map((item) => {
        return (
          <label key={item.data}>
            <input type="checkbox"></input>
            <span>{item.data}</span>
          </label>
        );
      })}
      {/* {props.listItems.length > 0
          ? props.listIems.map((item) => {
              <div>
                <input type="checkbox" />
                <span>{item.data}</span>
              </div>;
            })
          : ""} */}
      {/* {props.listIems.data.forEach((item) => {
          renderInput(item);
        })} */}
    </div>
  );
}

export default OpenTaskList;
