import React from "react";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./Login.css";

function Login() {
  const [state, dispatch] = useStateValue();

  const logIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__info">
        <p className="login__text">
          Log in to<p>facebook</p>
        </p>
        <input placeholder="Email address or phone number" type="email" />
        <input placeholder="Password" type="password" />
        <button type="submit" onClick={logIn}>
          Log in
        </button>
        <p className="login__link">Forgotten account? · Sign up for Facebook</p>
      </div>
    </div>
  );
}

export default Login;
