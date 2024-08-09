// import logo from "./logo.svg";
// import "./App.css";
// import gitPic from "./july24";

// import Menu from "./Menu";
// import Footer from "./Footer";
// import Container from "./Container";
// import Counter from "./Counter";
// import Todo from "./Todo";
// // import Hobbies from './Hobbies'
// // import Calculate from './Calculate';
// import Angle from "./Angle";
// import Add from "./Sum";
// import Value from "./Value";
// import Student from "./Student";
// import Login from "./Login";
// import Gender from "./gender";
// import Products from "./product";
// import TodoForms from "./TodoForms";
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import GenderReveal from "./gender";
// import TodoDetails from "./TodoDetails";
// import TodoDetailsEdit from "./TodoDetailsEdit";
// import ExampleUseEffect from "./ExampleUseEffect";
// import Cities from "./Cities";
// import CityNews from "./CityNews";
// import CityDetails from "./CityDetails";
// import RefHookExample from "./RefHookExample";
// import ClassBasedCounter from "./ClassBasedCounter";
// import ClassBasedCounterForm from "./ClassBasedCounterform";
// import { useState } from "react";
// function App() {
//   const LOGIN_URL = "https//:ascendion.com/login";
//   const [show, setShow] = useState(true);
//   const login_attempts = 5;
//   let menuData = [
//     { title: "Home", path: "/home" },
//     { title: "Todos", path: "/todo" },
//     { title: "Login", path: "/login" },
//     { title: "Cities", path: "/Cities" },
//   ];

//   let error_msgs = {
//     LOGIN_FAILED: "sorry!,Login failed",
//     LOGIN_500: "server error",
//   };
//   function greet() {
//     alert("Lets Login! you have a great day");
//   }
//   return (
//     <div className="App">
//       show var={show}
//       <br />
//       <select
//         onChange={(e) => {
//           e.target.value == "show" ? setShow(true) : setShow(false);
//         }}
//       >
//         <option value="show">show</option>
//         <option value="hide">hide</option>
//       </select>
//       <h1>Main Page</h1>
//       <BrowserRouter>
//         {show ? <Menu menuData={menuData} /> : ""}
//         <Link to="/todo">todo</Link>
//         <Link to="/login/Lets-Login/123">Login</Link>
//         {/* <Link to="/Login">Login</Link> */}
//         <br />
//         <Routes>
//           <Route path="/todo" element={<Todo />} />
//           <Route
//             path="/login/:title/:tokenId"
//             element={
//               <Login
//                 L_URL={LOGIN_URL}
//                 login_attempts={login_attempts}
//                 error_msgs={error_msgs}
//                 greet={greet}
//               />
//             }
//           />
//           <Route path="/todo/:id" element={<TodoDetails />} />
//           <Route path="/todo/:id/edit" element={<TodoDetailsEdit />} />
//           <Route path="/Login" element={<Login />} />
//           <Route path="/exampleuseeffect" element={<ExampleUseEffect />} />
//           <Route path="/cities/" element={<Cities />}>
//             <Route path=":name/" element={<CityDetails />}>
//               <Route
//                 path="news"
//                 element={<CityNews newsText="this is new test" />}
//               ></Route>
//             </Route>
//           </Route>
//           <Route path="/ref" element={<RefHookExample />}></Route>
//           <Route path="/CounterBased" element={<ClassBasedCounter />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from "react";
// import Login1 from "./Login1";
// import UserMenu from "./UserMenu";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <div>
//       {isLoggedIn && <UserMenu onLogout={handleLogout} />}
//       {!isLoggedIn && <Login1 onLogin={handleLogin} />}
//     </div>
//   );
// }

// export default App;

import "./App.css";
import ReduxCounter from "./ReduxCounter";
import Store from "./store/store";
// import CountReducer from "./reducers/CountReducer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ReduxTodo from "./ReduxTodo";
function App() {
  return (
    <BrowserRouter>
      <Link to="/CountReducer">Count</Link>
      <Link to="/ReduxCounter">Counter</Link>
      <Link to="/ReduxTodo">ReduxTodo</Link>

      <Routes>
        {/* <Route path="/CountReducer" element={<CountReducer />} /> */}
        <Route path="/ReduxCounter" element={<ReduxCounter />} />
        <Route path="/ReduxTodo" element={<ReduxTodo />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
