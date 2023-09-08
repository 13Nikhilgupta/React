import React, { useState } from "react";
import List from "./List";

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
          {items.map( (item , index) => <List key={index}
          id={index}
          item={item} 
          handleClick={(id) => {
            setItems( prevItems => prevItems.filter( (value , index) => index !== id))
            }} /> )}
        </ul>
      </div>
    </div>
  );
}

export default App;