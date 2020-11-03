import React, { useState } from "react";
import { numbers, sty2 } from "../../style/style";
const Funtions = () => {
  const [String, setString] = useState("");
  const [Ans, setAns] = useState(0);

  const handleEqual = () => {
    setAns(eval(String));
  };
  const handleReset = () => {
    setAns(0);
    setString("");
  };
  return (
    <div>
      <h1>Expression: {String}</h1>
      <br />
      <h1>FINAL ANSWER={Ans}</h1>
      <br />
      {/* <form action={handleEqual}>
        <input type="text"/>
        <input type="submit"/>
    </form> */}

      <br />
      <button
        style={numbers}
        onClick={() => {
          setString(String + "9");
        }}
      >
        9
      </button>
      <button
        style={numbers}
        onClick={() => {
          setString(String + "8");
        }}
      >
        8
      </button>
      <button
        style={numbers}
        onClick={() => {
          setString(String + "7");
        }}
      >
        7
      </button>
      <button
        style={numbers}
        onClick={() => {
          setString(String + "+");
        }}
      >
        +
      </button>
      <br />
      <button
        style={numbers}
        onClick={() => {
          setString(String + "6");
        }}
      >
        6
      </button>
      <button
        style={numbers}
        onClick={() => {
          setString(String + "5");
        }}
      >
        5
      </button>
      <button
        style={numbers}
        onClick={() => {
          setString(String + "4");
        }}
      >
        4
      </button>
      <button
        style={numbers}
        onClick={() => {
          setString(String + "-");
        }}
      >
        -
      </button>
      <br />
      <button
        style={numbers}
        onClick={() => {
          setString(String + "3");
        }}
      >
        3
      </button>
      <button
        style={numbers}
        onClick={() => {
          setString(String + "2");
        }}
      >
        2
      </button>
      <button
        style={numbers}
        onClick={() => {
          setString(String + "1");
        }}
      >
        1
      </button>
      <button
        style={numbers}
        onClick={() => {
          setString(String + "0");
        }}
      >
        0
      </button>
      <br />
      <button
        style={numbers}
        onClick={() => {
          setString(String + "*");
        }}
      >
        *
      </button>
      <button
        style={numbers}
        onClick={() => {
          setString(String + "/");
        }}
      >
        /
      </button>
      <button style={numbers} onClick={handleEqual}>
        =
      </button>
      <button style={numbers} onClick={handleReset}>
        C
      </button>
      <br />
    </div>
  );
};

export default Funtions;
