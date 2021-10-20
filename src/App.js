import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';

function App() {
  const userAdmin = {
    email: "admin@gmail.com",
    passwd: "admin1234"
  }
  const [user, setUser] = useState({ name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if (details.email === userAdmin.email && details.password === userAdmin.passwd) {
      setUser({ name: details.name, email: details.email});
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
  }

  return (
    <>
      <div className="App">
        {(user.email !== "" || true) ? (
          <div className="welcome">
            <div className="Navbar">
              <Navbar Logout={Logout}/>
            </div><br/><br/><br/>
            <h1>
              Welcome , <span>{user.name}</span>
            </h1>
          </div>
        ) :
          <LoginForm Login={Login} error={error} />
        }
      </div>
    </>
  );
}

export default App;
