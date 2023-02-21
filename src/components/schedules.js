import styles from "./schedule.module.css";
// note the missing S in SCHEDULE.module.css
import React from "react";
import Nav from "./nav";
import { useState, useEffect } from "react";

const Schedules = () => {
  // fetch data
  // map through
  const [list, setList] = useState([]);
  useEffect(() => {
    const grab = async () => {
      const res = await fetch(
        "https://fruit-db-6734d-default-rtdb.firebaseio.com/fruit.json"
      );
      const data = await res.json();
      const arrOfObj = Object.values(data);
      setList(arrOfObj);
    };
    grab();
  }, []);
  console.log(list);
  return (
    <div>
      <Nav />
      <h2 className={styles.availHead}>Availability</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Hours</th>
          <th>Days/Notes</th>
        </tr>
        {list &&
          list.map((each, index) => (
            <tr key={each.id}>
              <td className={styles.tableName}>{each.display}</td>
              <td>{each.times}</td>
              <td>{each.days}</td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Schedules;
