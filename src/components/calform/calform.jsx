import React, { useState } from "react";

const CalForm = ({ String, handleExpressionChange, handleSubmit }) => {
  return (
    <div>
      <form>
        <label> Expresion</label>
        <input onChange={handleExpressionChange} value={String} />

        <span onClick={handleSubmit}> OK</span>
      </form>
    </div>
  );
};

export default CalForm;
