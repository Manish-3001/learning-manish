import logo from "./logo.svg";
import "./App.css";
import gitPic from "./july24";

import Menu from "./Menu";
import Footer from "./Footer";
import Container from "./Container";
import Counter from "./Counter";
import Todo from "./Todo";
// import Hobbies from './Hobbies'
// import Calculate from './Calculate';
import Angle from "./Angle";
import Add from "./Sum";
import Value from "./Value";
import Student from "./Student";
import Login from "./Login";
import Gender from "./gender";
import Products from "./product";
import TodoForms from "./TodoForms";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import GenderReveal from "./gender";
function App() {
  const LOGIN_URL = "https//:ascendion.com/login";
  const login_attempts = 5;
  let menuData = [
    { title: "Home", path: "/home" },
    { title: "Todos", path: "/todo" },
    { title: "Login", path: "/login" },
  ];

  let error_msgs = {
    LOGIN_FAILED: "sorry!,Login failed",
    LOGIN_500: "server error",
  };
  function greet() {
    alert("Lets Login! you have a great day");
  }
  return (
    <div className="App">
      <h1>Main Page</h1>
      <BrowserRouter>
        <Menu menuData={menuData} />
        <Link to="/todo">todo</Link>
        <Link to="/login/Lets-Login/123">Login</Link>
        <br />
        <Routes>
          <Route path="/todo" element={<Todo />} />
          <Route
            path="/login/:title/:tokenId"
            element={
              <Login
                L_URL={LOGIN_URL}
                login_attempts={login_attempts}
                error_msgs={error_msgs}
                greet={greet}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
