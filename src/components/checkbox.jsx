import React from "react";

function CheckBox(props) {
  const { data, checked: isChecked } = props.listItems;
  return (
    <div>
      <input type="checkbox" value={data} checked={isChecked} />
      <span class="label-text">{data}</span>
    </div>
  );
}

export default CheckBox;
