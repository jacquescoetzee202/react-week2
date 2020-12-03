import { useState } from "react";

const StepCounter = ({ step, max }) => {

    const [ count, setCount ] = useState(0);

    const plusCount = () => setCount(count + step <= max ? count + step : count);
    const minusCount = () => setCount(count - step >= 0 ? count - step : count);

    return (
        <>
            <p
                className="mt-3"
            >StepCount : { count }</p>
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

export default StepCounter;