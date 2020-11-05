import React, { useCallback, useState } from "react";
import LoginFormCom from "../../components/loginformcom/loginform.com";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleLogin = (event) => {
    if (
      name === "shaoor" &&
      email === "shaoors@gmail.com" &&
      pass === "12345"
    ) {
      alert("You logged in");
      return;
    }
    alert("Data not Correct");
  };
  return (
    <div>
      <LoginFormCom
        name={name}
        email={email}
        password={pass}
        handleChangeName={handleChangeName}
        handleChangeEmail={handleChangeEmail}
        handleChangePassword={handleChangePassword}
        handleLogin={handleLogin}
      />
    </div>
  );
};
export default LoginForm;
