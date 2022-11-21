import React from "react";
import { unstable_HistoryRouter as Router } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Parent from "./Parent";
import Child from "./Child";
import AddUser from "./AddUser";
import history from "./history";
import { Counter } from "../features/counter/Counter";
const Navbar = () => {
  return (
    <Router history={history}>
      <div
        style={{
          display: "flex",
          background: "Blue",
          gap: "20px",
          fontSize: "20px",
          fontWeight: "1000",
        }}
      >
        <ul
          style={{
            display: "flex",
            background: "Blue",
            gap: "20px",
            color: "white",
          }}
        >
          <li
            style={{
              color: "white",
              marginRight: "60px",
            }}
          >
            <Link
              style={{
                color: "white",
              }}
              to="/"
            >
              Parent
            </Link>
          </li>
          <li
            style={{
              marginRight: "60px",
            }}
          >
            <Link
              style={{
                color: "white",
              }}
              to="/child"
            >
              Child
            </Link>
          </li>
          <li
            style={{
              marginRight: "60px",
            }}
          >
            <Link
              style={{
                color: "white",
              }}
              to="/adduser"
            >
              Add user
            </Link>
          </li>{" "}
          <li
            style={{
              marginRight: "60px",
            }}
          >
            <Link
              style={{
                color: "white",
              }}
              to="/counter"
            >
              Counter
            </Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Parent />}></Route>
        <Route path="/child" element={<Child />}></Route>
        <Route path="/adduser" element={<AddUser />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
      </Routes>
    </Router>
  );
};

export default Navbar;
