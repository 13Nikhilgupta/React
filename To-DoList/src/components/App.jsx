import React, { useState } from "react";

function App() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={ event => (setInputText(event.target.value)) } value={inputText} type="text" />
        <button onClick={ () => {
          setItems(prevItems => ([...prevItems , inputText]));
          setInputText("");
          }}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map( item => <li>{item}</li> )}
        </ul>
      </div>
    </div>
  );
}

export default App;