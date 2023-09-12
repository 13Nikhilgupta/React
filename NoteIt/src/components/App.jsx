import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";

function App(){

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes( prevNotes => ([...prevNotes , newNote]));
    }

    function deleteNote(id) {
        setNotes( prevNotes => prevNotes.filter( note => note.id !== id));
    }

    function editNote(newNote , id) {
        setNotes( prevNotes => prevNotes.filter( note => note.id !== id));
        setNotes( prevNotes => ([...prevNotes , newNote]));
    }

    return(
        <div>
            <Header />
            <CreateNote onAdd={addNote} />
            {notes.map( note => 
            <Note 
            key={note.id} 
            id={note.id} 
            title={note.title} 
            content={note.content} 
            onDelete={deleteNote}
            onEdit={editNote}
            /> )}
            <Footer />
        </div>
)};

export default App;