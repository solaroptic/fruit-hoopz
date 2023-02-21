import styles from "./event.module.css";
import React, { useContext, useState } from "react";
import AuthContext from "./authContext";

const EventAdd = ({ reloader }) => {
  const ctx = useContext(AuthContext);
  const personAdd = ctx.user;
  const [choice, setChoice] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.time.value);
    console.log(e.target.date.value);
    console.log(e.target.notes.value);
    console.log(choice);
    const d = new Date();
    const newET = choice;
    const newDate = e.target.date.value;
    const newTime = e.target.time.value;
    const newNotes = e.target.notes.value;
    const superObj = {
      eventList: newET,
      date: newDate,
      time: newTime,
      notes: newNotes,
      id: d.getTime(),
    };
    try {
      if (personAdd) {
        const res = await fetch(
          `https://fruit-db-6734d-default-rtdb.firebaseio.com/fruit/${personAdd}.json`,
          {
            method: "PATCH",
            body: JSON.stringify(superObj),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        console.log(data);
      }
      reloader();
    } catch (err) {
      if (err.name === "AbortError") {
        console.log("the fetch was aborted");
      } else {
        console.log("general error");
      }
    }
  };

  return (
    <div>
      <h3>Add Event</h3>
      <form className={styles.eventForm} onSubmit={submitHandler}>
        <label htmlFor="eventTypes"></label>
        <select
          name="eventList"
          id={styles.eventlist}
          className={styles.eventlist}
          form="eventform"
          value={choice}
          onChange={(e) => setChoice(e.target.value)}
        >
          <option value="cat">Choose Event📣</option>
          <option value="basketball">Basketball🏀</option>
          <option value="gaming">Gaming🎮</option>
          <option value="football">Football🏈</option>
          <option value="volleyball">Volleyball🏐</option>
          <option value="party">Party🎭</option>
          <option value="tennis">Tennis🎾</option>
          <option value="badminton">Badminton🏸</option>
          <option value="other">Other🎳🏑🪁💥</option>
        </select>
        <label htmlFor="date"></label>
        <input type="date" id={styles.eventlist} name="date"></input>
        <label htmlFor="time"></label>
        <input
          type="text"
          placeholder="Time/range"
          id={styles.eventlist}
          name="time"
          maxLength={25}
        ></input>
        <label htmlFor="notes"></label>
        <input
          type="text"
          id={styles.eventlist}
          name="notes"
          placeholder="Notes: location...etc"
          maxLength={65}
        ></input>
        <button className={styles.eventAddBtn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EventAdd;
