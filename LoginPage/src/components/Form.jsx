import React from "react";

function Form(props) {
    return (
        <form className="form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            {props.state===false && <input type="password" placeholder="Re-Enter Password" />}
            <button type="submit">{props.state ? "Login" : "Register"}</button>
        </form>
    );
}

export default Form;