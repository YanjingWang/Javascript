// App.js is the root component of the application. 
// It is the parent of all other components.
// It is the first component that is rendered when the application starts.
//cd 'c:\Users\Ywang36\OneDrive - NYCDOE\Desktop\Javascript\react\practice'  && npm start
// C:\Users\Ywang36\OneDrive - NYCDOE\Desktop\Javascript\react\practice> npm start react-route-dom@5.2.0
//https://v5.reactrouter.com/web/guides/quick-start copy import router part

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

let name = 'Charlotte Wang';
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = 'grey';
      document.title = 'Textutils - Dark Mode';
      setInterval(() => {
        document.title = 'Textutils is amazing mode';
      }
        , 2000);
      setInterval(() => {
        document.title = 'Install Textutils now!';
      }, 1500);

    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.title = 'Textutils - Light Mode';
    }
  }
  return (
    <>
      <Router>
        < Navbar title="Practice Project" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <div className='container my-3'>
          <Switch>
            <Route exact path="/">
              <Textform heading="TextArea" mode={mode} />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </>

    // <div classnameName="App">
    //   <header classnameName="App-header">
    //     <img src={logo} classnameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classnameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>



    // <>
    //   <nav>
    //     <li>Home</li>
    //     <li>About</li>
    //     <li>Contact</li>
    //   </nav>

    //   <div classnameName='container'>
    //     <p>This is an react app. Welcome, {name}!
    //     </p>
    //   </div>
    // </>
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // <>
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <div className="container-fluid">
    //       <a className="navbar-brand" href="/">Navbar</a>
    //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <a className="nav-link active" aria-current="page" href="/">Home</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="/">Link</a>
    //           </li>
    //           <li className="nav-item dropdown">
    //             <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //               Dropdown
    //             </a>
    //             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    //               <li><a className="dropdown-item" href="/">Action</a></li>
    //               <li><a className="dropdown-item" href="/">Another action</a></li>
    //               <li><hr className="dropdown-divider" /></li>
    //               <li><a className="dropdown-item" href="/">Something else here</a></li>
    //             </ul>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link disabled">Disabled</a>
    //           </li>
    //         </ul>
    //         <form className="d-flex">
    //           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    //           <button className="btn btn-outline-success" type="submit">Search</button>
    //         </form>
    //       </div>
    //     </div>
    //   </nav>
    // </>
  );
}




export default App;
