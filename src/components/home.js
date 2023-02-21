import styles from "./login.module.css";
import React, { useEffect, useState } from "react";
import EventAdd from "./eventAdd";
import Event from "./event";
import Nav from "./nav";
import Spinner from "./spinner";

const Home = () => {
  const [list, setList] = useState([]);
  const [reload, setReload] = useState(false);
  const [loadAddEvent, setLoadAddEvent] = useState(false);
  // spinner Timer
  setTimeout(() => {
    console.log("Delayed for 0.5 second.");
    setLoadAddEvent(true);
  }, 500);

  // reloading function
  const reloader = () => {
    setReload(true);
  };
  // fetching function
  useEffect(() => {
    const controller = new AbortController();
    const grab = async () => {
      console.log("hi");
      const res = await fetch(
        "https://fruit-db-6734d-default-rtdb.firebaseio.com/fruit.json",
        { signal: controller.signal }
      );
      const data = await res.json();
      console.log(data);
      const arrOfObj = Object.values(data);
      const d = new Date();
      // 86400000 = milli in day;
      setList(
        arrOfObj.filter(
          (each) => Date.parse(each.date) > d.getTime() + 86400000
        )
      );
    };
    grab();
    setReload(false);
    return () => {
      controller.abort();
    };
  }, [reload]);
  console.log(list);
  return (
    <>
      <Nav />
      <h1 className={styles.headingHome}>Fruit Hoopz</h1>
      <img src="/fruit.png" className={styles.fruit} alt="pile of fruit" />
      <img src="/orange.png" className={styles.orange} alt="orange" />
      {!loadAddEvent && <Spinner />}
      {list &&
        loadAddEvent &&
        list.map((each, index) => (
          <Event
            key={each.id}
            date={each.date}
            display={each.display}
            eventList={each.eventList}
            notes={each.notes}
            time={each.time}
          />
        ))}
      {loadAddEvent && <EventAdd reloader={reloader} />}
    </>
  );
};

export default Home;
