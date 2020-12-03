import { useState } from "react";

const Clicked = () => {

    const [ clicked, setClicked ] = useState(false);

    const handleClick = () => setClicked(true);

    return <p onClick={ handleClick }>{ clicked ? "Clicked" : "Not clicked" }</p>

}

export default Clicked;