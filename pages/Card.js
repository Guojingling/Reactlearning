//const { useState } = require("react");

import React, {useState} from 'react';

function Card(props){
    //const [toggled, setToggled] = useState(false);
    let toggled = false;
    const handleToggleBody = () =>{
        //setToggled(!toggled);
        toggled = !toggled;
        console.log(toggled);
    }

    return(
        <section className = "Card">
            <h3 className="card_title" onMouseMove={handleToggleBody}>
                {props.title}
            </h3>

        {toggled && <article className="card_body">
            {props.body}
            </article>}
        </section>
    )

}
export default Card;