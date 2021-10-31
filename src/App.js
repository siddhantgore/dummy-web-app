import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './components/About';
import EditAccount from './components/EditAccount';

function App() {
  const userAdmin = {
    email: "admin@gmail.com",
    passwd: "admin1234"
  }
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const [login, setLogin] = useState({ isLogin: false });

  const Login = details => {
    console.log(details);
    if (details.email === userAdmin.email && details.password === userAdmin.passwd) {
      setUser({ name: details.name, email: details.email });
      setLogin({isLogin:true});
    }
    else {
      console.log("Please Enter Valid Data");
      setError("Please Enter Valid Data");
    }
  }
  const Logout = () => {

    console.log("Logout");
    setUser({ name: "", email: "" });
    setError("");
    setLogin({isLogin:false});
  }

  return (
    <>
      <div className="App">
        {(login.isLogin) ? (
          <Router>
            <Switch>
              <Route exact path="/login">
                <LoginForm />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/edit">
                <EditAccount user={user} />
              </Route>
            </Switch>
            <div className="welcome">
              <div className="Navbar">
                <Navbar Logout={Logout} />
              </div>
            </div>
          </Router>
        ) :
          <LoginForm login={Login} error={error} />
        }
      </div>
    </>
  );
}

export default App;
