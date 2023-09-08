import React, { useState } from "react";
import List from "./List";
import InputArea from "./InputArea";

function App() {

  const [items, setItems] = useState([]);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea setItems={setItems}/>
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