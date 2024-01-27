import React, { useRef } from "react";
import "./SignUpScreen.css";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    //disable the default refresh
    e.preventDefault();
    console.log(">>>", emailRef.current.value, passwordRef.current.value);

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log("authUser", authUser);
      })
      .catch((error) => alert(error.message));
  };
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((authUser) => {
          console.log("authUser", authUser);
        })
        .catch((error) => alert(error.message));
    };
  
  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button onClick={signIn} type="submit">
          Sign In
        </button>
        <h4>
          <span className="signUpScreen_gray">New to Netflix? </span>
          <span onClick={register} className="signUpScreen_link">
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
