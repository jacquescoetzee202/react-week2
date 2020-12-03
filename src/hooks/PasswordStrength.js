import { useState } from "react";

const PasswordStrength = () => {

    const [ input, setInput ] = useState("");

    const onChange = (event) => setInput( event.currentTarget.value );

    let length = input.length;

    let styling = "";

    if (length >= 16 ){
        styling = "success text-white";
    } 
    else if (length >= 9){
        styling = "warning text-dark";
    } 
    else if (length > 0){
        styling += "danger text-white";
    }

    return(
        <form>
            <label className="mt-3">
                Password
            </label>
            <input
                type="password" 
                className={`d-block mb-2 bg-${ styling }`}
                value={input}
                onChange={ onChange }
            />
        </form>
    );

}

export default PasswordStrength;


