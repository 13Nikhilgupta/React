import React, { useState } from "react";
import {v4 as uuidv4} from "uuid"
import {Fab , Zoom} from "@material-ui/core";
import {Add} from "@material-ui/icons";

function CreateNote(props) {

    const [note , setNote] = useState({id:uuidv4() , title:"" , content:""});
    const [isExpanded , setIsExpanded] = useState(false);

    function handleChange(event) {
        const {name , value} = event.target;
        setNote( prevValue => ({...prevValue,[name]:value}));
    }

    function handleClick(event) {
        props.onAdd(note);
        setNote({id:uuidv4(), title:"", content:""});
        event.preventDefault();
    }

    return(
        <form className="create-note">
            {isExpanded && <input
            onChange={handleChange}
            name="title" 
            type="text" 
            placeholder="Title" 
            value={note.title}
            autoFocus="true" />}

            <textarea
            onChange={handleChange}
            onClick={ () => setIsExpanded(true)}
            name="content" 
            rows={isExpanded ? 3 : 1} 
            placeholder="Write Note Here..." 
            value={note.content} />

            <Zoom in={isExpanded}>
                <Fab onClick={handleClick}><Add/></Fab>
            </Zoom>
        </form>
    )
}

export default CreateNote;