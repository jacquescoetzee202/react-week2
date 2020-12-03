import { useState } from "react";

const CatchMeIfYouCan = ({ jump }) => {

    const [ position, setPosition ] = useState(100);

    const handleClick = () => setPosition(position + jump);

    return(
        <button 
            onClick={ handleClick }
            type="button"
            className="btn btn-danger"
            style={{
                position: "relative",
                top: position,
            }}
        >
            Try Catch Me!
        </button>
        
    );
}

export default CatchMeIfYouCan;