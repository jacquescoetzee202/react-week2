import { useState } from "react";

const Colours = ({ colours }) => {

    const [ index, setIndex ] = useState(0);

    const handleClick = () => setIndex( index + 1 < colours.length ? index + 1 : 0);

    let hex = colours[index];
    console.log(hex);

    return(
        <div
            className="container mt-3"
            onClick={ handleClick }
            style={{
                backgroundColor: hex,
                borderRadius: 100,
                height: 200,
                width: 200
            }}
        >
        </div>
    );
}

export default Colours;