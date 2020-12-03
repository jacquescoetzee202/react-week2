import { useState } from "react";

const Clicked = () => {

    const [ clicked, setClicked ] = useState("Not clicked");

    const handleClick = () => setClicked( "Clicked" );

    return <p onClick={ handleClick }>{ clicked }</p>

}

export default Clicked;