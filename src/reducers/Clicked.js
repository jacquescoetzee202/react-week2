import { useReducer } from "react";

// initial state
const initialState = { clicked: false };

// reducer functions

const reducer = (state, action ) => {
    switch (action.type) {
        case "CLICK" : return { clicked: true };
        default: return state;
    }
}

const Clicked = () => {

    const [ state, dispatch ] = useReducer(reducer, initialState);

    let innerText = state.clicked ? "Clicked" : "Not clicked!";

    return <p onClick={ () => dispatch({ type: "CLICK" }) } >{ innerText }</p>;
}

export default Clicked;