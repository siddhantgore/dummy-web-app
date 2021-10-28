import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg'

function Navbar(props) {
    const LogOut = () => {
        props.Logout();
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a class="navbar-brand" href="/">DevSec</a>
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
                            <Link class="nav-link disabled" to="/about">About Us</Link>
                        </li>
                        <div className="menu">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    My Account
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link class="dropdown-item" to="/edit">Edit Account</Link>
                                    <a class="dropdown-item disabled" href="/">My Orders</a>
                                    <a class="dropdown-item disabled" href="/">Setting</a>
                                    <a class="dropdown-item disabled" href="/">Delete Account</a>
                                </div>
                            </li>
                            <div className="logout">
                                <img src={logo} alt="Logo" width="18" height="18" onClick={LogOut} />
                            </div>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
