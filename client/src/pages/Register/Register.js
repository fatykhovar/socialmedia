import React, { useState } from "react";
import "./Register.css";

import Axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/user/register", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  return (
    <div className="Register">
      <h1>Регистрация</h1>
      <div className="RegisterForm">
        <input
          type="text"
          placeholder="Логин..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Пароль..."
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button onClick={register}>Зарегистрироваться</button>
      </div>
    </div>
  );
}

export default Register;
