import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import entries from "../entries";

function App(){
    return(
        <div>
            <Header />
            {entries.map( entry => <Note key={entry.id} title={entry.title} content={entry.content} /> )}
            <Footer />
        </div>
)};

export default App;