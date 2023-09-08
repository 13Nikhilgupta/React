import React, { useState } from "react";

function InputArea(props) {

    const [inputText, setInputText] = useState("");

    return (
    <div className="form">
        <input onChange={ event => (setInputText(event.target.value)) } value={inputText} type="text" />
        <button onClick={ () => {
        props.setItems(prevItems => ([...prevItems , inputText]));
        setInputText("");
        }}>
        <span>Add</span>
        </button>
    </div>
    )
}

export default InputArea;