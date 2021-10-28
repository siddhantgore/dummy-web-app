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
import UserStore from './store/UserStore';

function App() {
  const userAdmin = {
    email: "admin@gmail.com",
    passwd: "admin1234"
  }
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const [flag, setFlag] = useState(true);

  const Login = details => {
    UserStore.isLoggedIn = true;
    UserStore.username = "";

    // console.log(details);
    // if (details.email === userAdmin.email && details.password === userAdmin.passwd) {
    //   setUser({ name: details.name, email: details.email });
    //   setFlag(true);
    // }
    // else {
    //   console.log("Please Enter Valid Data");
    //   setError("Please Enter Valid Data");
    // }
  }
  const Logout = () => {
    UserStore.isLoggedIn = false;
    UserStore.username = "";
    // console.log("Logout");
    // setUser({ name: "", email: "" });
    // setError("");
  }

  function componentDidmount() {
    // try {
    //   let res = await fetch("./isLoggedIn", {
    //     method: "post",
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     }
    //   });

    //   let result = await res.json;
    //   if (result && result.success) {
    //     UserStore.loading = false;
    //     UserStore.isLoggedIn = true;
    //     UserStore.username = result.username;

    //   }
    //   else{
        UserStore.loading = true;
        UserStore.isLoggedIn = true;
        console.log("loggedin")
    //   }
    // }
    // catch (e) {
    //   UserStore.loading = true;
    //   UserStore.isLoggedIn = false;
    // }
  }

   function doLogout() {
    // try {
    //   let res = await fetch("./logout", {
    //     method: "post",
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     }
    //   });

      // let result = res.json;
      // if (result && result.success) {
        UserStore.isLoggedIn = false;
        UserStore.username = "";

      // }
    // }
    // catch (e) {
    //  console.log(e);
    // }
  }

  return (
    <>
      <div className="App">
        {(UserStore.isLoggedIn===true) ? (
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
          <LoginForm login={componentDidmount} error={error} />
        }
      </div>
    </>
  );
}

export default App;
