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
    if(details.email===userAdmin.email&&details.password===userAdmin.passwd){
      console.log("Logged In");
      setUser({name:details.name,email:details.email});
    }
    else{
      console.log("Please Enter Valid Data");
    }
  }
  const Logout = () => {
    console.log("Logout");
    setUser({name:"",email:""});
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
            Welcome , <span>{user.name}</span>
          </h1>
          <div className="logout">
            <button onClick={Logout}>Logout</button>
          </div>
        </div>
      ) :
        <LoginForm Login={Login} error={error}/>
      }
    </div>
  );
}

export default App;
