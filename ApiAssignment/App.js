import logo from './logo.svg';
import './App.css';

import Menu from './Menu';
import Footer from './Footer';
import Container from './Container';
import Counter from './Counter';
import Todo from './Todo';
import Hobbies from './Hobbies'
// import Calculate from './Calculate';
import Angle from './Angle';
import Add from './Sum';
import Value from './Value';
import Student from './Student';
import Login from './Login';
import Gender from './gender';
import Products from './product';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import GenderReveal from './gender';
function App() {
  return (
    <div className="App">
    {/* //   <h1>Main Page</h1>
    //   <BrowserRouter>
    //   <Link to ="/todo">todo</Link>
    //   <Link to ="/login/Lets-Login/123">Login</Link>
    //   <br/>
    //   <Routes>
    //     <Route path="/todo" element={<Todo/>}/>
    //     <Route path="/login/:title/:tokenId" element={<Login/>}/>

    //   </Routes>
    / </BrowserRouter> */}
       <Products/>
     <GenderReveal/>
        
        

       
    </div>
  );
}

export default App;
