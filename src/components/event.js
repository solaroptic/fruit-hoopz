import styles from "./event.module.css";
// import React, { useState } from "react";

const Event = (props) => {
  // const [rerun, setRerun] = useState(false);
  return (
    <>
      <div className={styles.eventWrapper}>
        <main>
          <section>{props.display}</section>
          <section>
            {props.eventList === "basketball"
              ? "🏀"
              : props.eventList === "gaming"
              ? "🎮"
              : props.eventList === "football"
              ? "🏈"
              : props.eventList === "tennis"
              ? "🎾"
              : props.eventList === "volleyball"
              ? "🏐"
              : props.eventList === "other"
              ? "🎭"
              : ""}
            {props.eventList}
          </section>
          <section>{props.date}</section>
          <section>{props.time}</section>
          {/* <aside>sign-up</aside> */}
        </main>
        <footer>
          <section>{props.notes}</section>
        </footer>
      </div>
    </>
  );
};

export default Event;
