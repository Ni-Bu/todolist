import { React, useState } from "react";
import { useHistory } from "react-router-dom";

function HomePage(props) {
  const [value, setValue] = useState("");
  let history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
    history.push("/taskPage", value);
    // props.history.push("/taskPage");
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        type="text"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
}

export default HomePage;
