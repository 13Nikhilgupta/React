import React from "react";
import Form from "./Form"

let isRegisterd=false;

function App() {
  return (
    <div className="container">
      <h1>{isRegisterd ? "LOGIN" : "REGISTER HERE"}</h1>
      <Form state={isRegisterd}/>
    </div>
  );
}

export default App;
