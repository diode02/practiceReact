import React, { useState } from "react";

const UserinputPage = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    // event.preventDefault();

    if (name.length < 5) {
      alert("name value must be gretaer then 5");
      return;
    }
    //send this name to backend
    setName("s");
  };
  return (
    <div>
      {/* <span>{name}</span> */}
      <form>
        <label> Name</label>
        <input
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
        />

        <span onClick={handleSubmit}> OK</span>
      </form>
    </div>
  );
};

export default UserinputPage;
