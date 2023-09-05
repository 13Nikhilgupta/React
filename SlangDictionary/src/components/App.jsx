import React from "react";
import Card from "./Card";
import slangs from "../slangs";

function App() {
  return (
    <div>
      <h1>
        <span>Gen-Z Slang Dictionary</span>
      </h1>
      <dl className="dictionary">
        {slangs.map(slang => <Card key={slang.id} name={slang.name} meaning={slang.meaning}/>)}
      </dl>
    </div>
  );
}

export default App;
