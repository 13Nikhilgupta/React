import React, { useState } from "react";

function App() {

  let [isRegistered,setIsRegistered] = useState(false);
  let [password1,setPassword1] = useState("");
  let [password2,setPassword2] = useState("");

  return (
    <div className="container">
      <h1>{isRegistered ? "LOGIN " : "REGISTER HERE "}</h1>

      <form
      onSubmit={(event)=> {
          password1 === password2 ? setIsRegistered(true) : alert("Both password are not same");
          setPassword1("");
          event.preventDefault();
          }} 
      className="form">

        <input type="text" placeholder="Username" />

        <input 
        onChange={(event) => {setPassword1(event.target.value)}} 
        type="password" 
        placeholder="Password"
        value={password1} />

        {isRegistered===false && <input 
        onChange={(event) => {setPassword2(event.target.value)}} 
        type="password" 
        placeholder="Re-Enter Password"
        value={password2} />}

        <button type="submit"> {isRegistered ? "Login" : "Register"} </button>

      </form>
    </div>
  );
}

export default App;