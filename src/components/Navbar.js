import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg'

function Navbar(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a class="navbar-brand" href="/">AppSec</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/login">Home</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="/about">About Us</a>
                        </li>
                        <div className="menu">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    My Account
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="/">Edit Account</a>
                                    <a class="dropdown-item" href="/">My Orders</a>
                                    <a class="dropdown-item" href="/">Cart</a>
                                    <a class="dropdown-item" href="/">Delete Account</a>
                                </div>
                            </li>
                            <div className="logout">
                                <img src={logo} alt="Logo" width="18" height="18" onClick={props.Logout}/>
                            </div>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
