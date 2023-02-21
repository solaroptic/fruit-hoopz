import styles from "./about.module.css";
import React from "react";
import Nav from "./nav";

const About = () => {
  return (
    <>
      <Nav />
      <h2 className={styles.aboutHead}>About</h2>
      <aside>
        To refer a friend...txt Vince and I can put them in the system.
      </aside>
      <aside>One event per person at a time.</aside>
      <aside className={styles.finish}>&#169; 2023 Some guy in produce</aside>
    </>
  );
};

export default About;
