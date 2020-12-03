import { useState } from "react";

const Square = ({ colour }) => {

    const [ green, setGreen ] = useState(true);

    const handleClick = () => setGreen(!green);

    const renderColor = green ? "green" : colour; 

    return(
        <div 
            onClick={ handleClick } 
            style={{
                backgroundColor: renderColor,
                height: 200,
                width: 200,
                marginTop: 20,
                marginBottom: 20
            }} 
            className="container">
        </div>
    );
}



Square.defaultProps = {
    colour: "hot-pink"
}

export default Square;

