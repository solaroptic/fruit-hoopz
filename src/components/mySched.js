import styles from "./mySched.module.css";
import React, { useContext, useState } from "react";
import AuthContext from "./authContext";
import { Navigate } from "react-router-dom";
import Nav from "./nav";

const MySched = () => {
  const ctx = useContext(AuthContext);
  const personAdd = ctx.user;
  const [choice, setChoice] = useState("Open");
  const [confirm, setConfirm] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(choice);
    console.log(e.target.days.value);
    const newDays = e.target.days.value;
    const newTimes = choice;
    const plainObj = {
      days: newDays,
      times: newTimes,
    };
    console.log(plainObj);
    try {
      if (personAdd) {
        const res = await fetch(
          `https://fruit-db-6734d-default-rtdb.firebaseio.com/fruit/${personAdd}.json`,
          {
            method: "PATCH",
            body: JSON.stringify(plainObj),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        console.log(data);
        setConfirm(true);
      }
    } catch (err) {
      if (err.name === "AbortError") {
        console.log("the fetch was aborted");
      } else {
        console.log("general error");
      }
    }
  };

  if (confirm) {
    return <Navigate to={{ pathname: "/" }} />;
  }

  return (
    <div>
      <Nav />
      <h2 className={styles.myAvailHead}>Edit Availability</h2>
      <form id={styles.myAvail} onSubmit={submitHandler}>
        <label htmlFor="times">Preferred-Time:</label>
        <select
          id={styles.preferred}
          name="times"
          form="myAvail"
          value={choice}
          onChange={(e) => setChoice(e.target.value)}
        >
          <option value="Open">Open</option>
          <option value="Mornings">Mornings</option>
          <option value="Midday">Midday</option>
          <option value="Mornings-Midday">Mornings and Midday</option>
          <option value="Afternoons">Afternoons</option>
          <option value="Nights">Nights</option>
          <option value="Afternoons-Nights">Afternooons and Nights</option>
        </select>
        <label htmlFor="days">Days Off/Can't do</label>
        <input
          type="text"
          id={styles.days}
          name="days"
          placeholder="Off weekends, can't do this Saturday..."
          maxLength={65}
        ></input>
        <button className={styles.availBtn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MySched;
