import React, { useEffect, useState } from "react";

import "./Navigation.css";

function Nav(props) {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <a href="/">
        <img
          className="nav-logo"
          src="https://fontmeme.com/permalink/210322/9a560530b9f8b713cd79e58e3c4c73e9.png"
          alt="Netflix Logo"
        />
      </a>

      {props.hasUser ? (
        <>
          {/* <img
            className="nav-avatar"
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            alt="Avatar"
          /> */}
          {/* <h4>hello <br /> {props.hasUser.email}</h4> */}
          <button className="login-btn" onClick={props.handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <a className="login-btn" href="/auth">
          Login
        </a>
      )}
    </div>
  );
}

export default Nav;
