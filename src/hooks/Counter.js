import { useState } from "react";

const Counter = ({ initial, max }) => {

    const [ count, setCount ] = useState(initial);

    const plusCount = () => setCount(count < max ? count + 1 : count);
    const minusCount = () => setCount(count > 0 ? count - 1 : count);

    return (
        <>
            <p
                className="mt-3"
            >{ count }</p>
            <button 
                onClick={ plusCount }
                type="button"
                className="btn btn-success"
            >
                +
            </button>
            <button 
                onClick={ minusCount }
                type="button"
                className="btn btn-success ml-1"
            >
                -
            </button>
        </>
    );

}

export default Counter;