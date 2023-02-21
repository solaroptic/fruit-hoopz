import styles from "./App.module.css";
import { useState } from "react";
import Login from "./components/login";
import AuthContext from "./components/authContext";
import Home from "./components/home";
import { Routes, Route } from "react-router-dom";
import About from "./components/about";
import MySched from "./components/mySched";
import Schedules from "./components/schedules";
// import { Link, Routes, Route } from 'react-router-dom'
function App() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState("guest");

  const submitHandler = function (e) {
    e.preventDefault();
    console.log(e.target.uname.value, e.target.pass.value);
    let nizzle = e.target.uname.value.toLowerCase();
    let pizzle = e.target.pass.value.toLowerCase();
    setUser((prevState) => {
      return e.target.uname.value.toLowerCase();
    });
    if (!nizzle) {
      alert("Username required!");
    } else if (!pizzle) {
      alert("Password required!");
    } else if (
      pizzle === "fruit" &&
      (nizzle === "vinsanity" ||
        nizzle === "marktheshark" ||
        nizzle === "sarbear" ||
        nizzle === "joein24" ||
        nizzle === "j2thet" ||
        nizzle === "marsbars" ||
        nizzle === "nickoftime" ||
        nizzle === "jesseagle")
    ) {
      e.target.uname.value = "";
      e.target.pass.value = "";
      setAuth(true);
    } else {
      alert("Wrong Username/Password!");
    }
  };

  return (
    <>
      <AuthContext.Provider value={{ user: user, auth: auth }}>
        <div className={styles.App}>
          {!auth && <Login handler={submitHandler} />}
          {auth && (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/schedules" element={<Schedules />} />
              <Route path="/mySched" element={<MySched />} />
              <Route path="/about" element={<About />} />
            </Routes>
          )}
        </div>
      </AuthContext.Provider>
    </>
  );
}

export default App;
