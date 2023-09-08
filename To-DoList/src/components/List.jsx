import React from "react";

function List(props) {

    // const [checked, setChecked] = useState(false);

    return(
        <li onClick={() => {props.handleClick(props.id);}}> {props.item} </li> 
        // () => setChecked(!checked)} style={{textDecoration: checked? "line-through" : "none"}
    )
}

export default List;