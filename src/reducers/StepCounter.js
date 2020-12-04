import { useReducer } from "react";

// initial state
const initialState = {
    count: 0,
}

// reducer function
const increase = (state, step, max) => {
    const next = state.count + step;

    if(next <= max){
        return {
            count: next
        }
    } else {
        return state;
    }
}
const decrease = (state, step) => {
    const next = state.count - step;
    
    if(next >= 0){
        return {
            count: next
        }
    } else {
        return state;
    }
}

const reducer = (state, { type, step, max } ) => {
    switch (type) {
        case "INCREASE" : return increase(state, step, max);
        case "DECREASE" : return decrease(state, step);
        default: return state;
    }
}

// component
const StepCounter = ({ max, step }) => {

    const [ state, dispatch ] = useReducer(reducer, initialState);


    return(
        <>
            <h1
                className="mt-3"
            >StepCount : { state.count }</h1>
            <button 
                onClick={ () => dispatch({ type: "INCREASE", step: step, max: max }) }
                type="button"
                className="btn btn-success"
                >
                +
            </button>
            <button 
                onClick={ () => dispatch({ type: "DECREASE", step: step}) }
                type="button"
                className="btn btn-success ml-1"
            >
                -
            </button>
        </>
    );
}

export default StepCounter;