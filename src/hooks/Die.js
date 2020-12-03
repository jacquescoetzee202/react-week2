import { useState } from "react";

const Die = ({ sides }) => {

    const [ roll, setRoll ] = useState(`Roll the ${sides} sided die!`);

    const handleClick = () => {
        let randomRoll = Math.floor((Math.random()*sides) + 1);
        setRoll(randomRoll);
    }

    return(
        <div
            className="mt-3 border border-primary rounded-lg text-center"
            onClick={ handleClick }
            style={{
                height: 100,
                width: 100
            }}
        >
            <p>{ roll }</p>
        </div>
    );
}

export default Die;