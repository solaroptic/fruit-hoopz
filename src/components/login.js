import styles from "./login.module.css";
import React from "react";

const Login = (props) => {
  const submitHandler = (e) => {
    props.handler(e);
  };

  return (
    <div>
      <h1 className={styles.heading}>Fruit Hoopz</h1>
      <h2 className={styles.mobile}>Mobile App only...</h2>
      <form className={styles.inputsForm} onSubmit={submitHandler}>
        <input
          type="text"
          name="uname"
          placeholder="Username"
          className={styles.inputs}
        />
        <input
          type="password"
          name="pass"
          placeholder="Password"
          className={styles.inputs}
        />

        <button type="submit" className={styles.loginBtn}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
