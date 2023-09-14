// rfc tab--> copy from App.js -->line 18 change Home to {props.title} line 21 change Link to {props.aboutText} and pass props to Navbar() in App.js
// change App.js to: coment line 45-82 
// import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/Navbar';
// replace href= with to= in Navbar.js
// replace <a with <Link in Navbar.js
import React from 'react'
import PropTypes from 'prop-types' // impt tab
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default function Navbar(props) {
    // const toggleMode = () => {

    //     if (props.mode === 'light') {
    //         props.toggleMode('dark');
    //         document.body.style.backgroundColor = '#042743';
    //         // showAlert("Dark mode has been enabled", "success");
    //         // document.title = 'TextUtils - Dark Mode';
    //         // setInterval(() => {
    //         //     document.title = 'TextUtils is amazing mode';
    //         // }, 2000);
    //         // setInterval(() => {
    //         //     document.title = 'Install TextUtils now';
    //         // }, 1500);
    //     }
    //     else {
    //         props.toggleMode('light');
    //         document.body.style.backgroundColor = 'white';
    //         // showAlert("Light mode has been enabled", "success");
    //         // document.title = 'TextUtils - Light Mode';
    //     }
    // }
    return (
        <>
            {/* Code of Navbar*/}
            {/* <nav className= "navbar navbar-expand-lg navbar-light bg-light" > */}
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> {/* use variable in strings */}
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">{props.title}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.aboutText}</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/">Action</Link></li>
                                    <li><Link className="dropdown-item" to="/">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled">Disabled</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        {/*<div className="form-check form-switch mx-3"> */}
                        <div className={`form-check form-switch mx-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                            <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = { title: PropTypes.string.isRequired, aboutText: PropTypes.string.isRequired } // ptfr tab
// Navbar.defaultProps = { title: 'Set title here', aboutText: 'About Text here' } // ptdr tab comment App.js line 13