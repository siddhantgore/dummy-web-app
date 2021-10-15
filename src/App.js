import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

function App() {
  const userAdmin = {
    email: "admin@gmail.com",
    passwd: "admin1234"
  }
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
  }
  const Logout = () => {
    console.log("Logout");
  }

  const Submit = (e) => {
    e.preventDefault();
    console.log("submitted");
  }
  return (
    <div className="App">
      {(user.email !== "") ? (
        <div className="welcome">
          <h1>
            Welcome , <spann>{user.name}</spann>
          </h1>
        </div>
      ) :
        <LoginForm Login={Login} error={error}/>
      }
    </div>
  );
}

export default App;
