import React, { useState } from "react";
import {Delete , Done , Edit} from "@material-ui/icons";

function Note(props){

    const [isEdit , setIsEdit] = useState(false);
    const [note , setNote] = useState({id:props.id , title:props.title , content:props.content});

    function handleChange(event) {
        const {name , value} = event.target;
        setNote( prevValue => ({...prevValue,[name]:value}));
    }

    function handleClick(event) {
        props.onEdit(note , props.id);
        setIsEdit(false);
    }

    return(
        <div className="note">
            {!isEdit ? <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={() => setIsEdit(true)}><Edit/></button>
            <button onClick={() => props.onDelete(props.id)}><Delete/></button>
            </div> : <div>
            <input
            onChange={handleChange}
            name="title" 
            type="text" 
            value={note.title} 
            autoFocus="true"
            />
            <textarea
            onChange={handleChange}
            name="content" 
            rows="3"
            value={note.content} />
            <button onClick={handleClick}><Done/></button>
            </div>}
        </div>
    );
};

export default Note;