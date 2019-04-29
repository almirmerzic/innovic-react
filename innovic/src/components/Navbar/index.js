import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to ='/'><img src={logo} className="App-logo" alt="logo" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-5">
                    <li className="nav-item active">
                    <Link className="nav-link" to ='/'>Home </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to ='/postlist'>Post List</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}