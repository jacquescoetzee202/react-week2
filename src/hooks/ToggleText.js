import { useState } from "react";

const ToggleText = ({ initial, alternate }) => {

    const [ toggle, setToggle ] = useState(false);

    const handleClick = () => setToggle(!toggle);

    const innerText = toggle ? alternate : initial;

    return (
        <>
            <p>{ innerText }</p>
            <button 
                onClick={ handleClick }
                type="button"
                className="btn btn-success"
            >
                Toggle
            </button>
        </>
    );

}

export default ToggleText;