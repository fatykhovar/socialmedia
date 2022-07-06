import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";


function Nav() {
  let [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn"));

  useEffect(() => {
    setLoggedIn(localStorage.getItem("loggedIn"));
    console.log("loggedIn", loggedIn);
  }, [localStorage.getItem("loggedIn")]);

  let navigate  = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    localStorage.setItem("loggedIn", false);
    setLoggedIn(false);
  }

  return (
    <div className="Navbar">
      <a href="/">Новости</a>
      {loggedIn ? (
        <>
          <a href="/upload">Создать пост</a>
          <a href="/profile">Мой профиль</a>
          <a href="/login" onClick={logout}>Выйти</a>
        </>
      ) : (
        <>
          <a href="/register">Зарегистрироваться</a>
          <a href="/login">Войти</a>
        </>
      )}
    </div>
  );
}

function Navbar(){
  return (
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
}

export default Navbar;
