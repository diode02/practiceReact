import React, { useState } from "react";

const LoginFormCom = ({
  name,
  email,
  pass,
  handleChangeName,
  handleChangeEmail,
  handleChangePassword,
  handleLogin,
}) => {
  return (
    <div>
      <form>
        <label> Name:</label>
        <input onChange={handleChangeName} value={name} />
        <label> Email:</label>
        <input onChange={handleChangeEmail} value={email} />
        <label> Password:</label>
        <input onChange={handleChangePassword} value={pass} />

        <button onClick={handleLogin}> Login</button>
      </form>
    </div>
  );
};

export default LoginFormCom;
