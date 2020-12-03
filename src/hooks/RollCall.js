import { useState } from "react";

const RollCall = ({ names }) => {

    const [ index, setIndex ] = useState(0);

    const handleClick = () => setIndex( (index + 1) % names.length );

    return(
        <>
            <h3 className="mt-3" >{ names[index] }</h3>
            <button 
                onClick={ handleClick }
                type="button"
                className="btn btn-secondary"
            >
                Next
            </button>
        </>
    );
}

export default RollCall;