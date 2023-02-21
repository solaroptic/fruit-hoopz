import styles from "./spinner.module.css";
import React from "react";

const Spinner = () => {
  return (
    <>
      <img src="/melon.png" className={styles.spin} />
    </>
  );
};

export default Spinner;
