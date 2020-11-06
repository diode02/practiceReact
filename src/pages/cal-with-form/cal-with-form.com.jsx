import React, { useState } from "react";
import { numbers } from "./calculator.sty";
import CalForm from "../../components/calform/calform";
const CalWithForm = () => {
  const [String, setString] = useState("");
  const [Ans, setAns] = useState(0);

  const handleExpressionChange = (event) => {
    setString(event.target.value);
  };
  const handleSubmit = (event) => {
    if (String.length < 2 || isNaN(String.charAt(String.length - 1))) {
      alert("Not a valid Expression");
      return;
    }

    setAns(eval(String));
  };
  const handleReset = () => {
    setAns(0);
    setString("");
  };
  return (
    <div>
      <CalForm
        String={String}
        handleExpressionChange={handleExpressionChange}
        handleSubmit={handleSubmit}
      />
      <h1>Expression: {String}</h1>
      <br />
      <h1>FINAL ANSWER={Ans}</h1>
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
      <button style={numbers} onClick={handleSubmit}>
        =
      </button>
      <button style={numbers} onClick={handleReset}>
        C
      </button>
      <br />
    </div>
  );
};

export default CalWithForm;
