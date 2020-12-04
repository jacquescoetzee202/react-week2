import { useReduce } from "react";

// initial state
const initialState = {
    degsC: "",
    degsF: "",
}

// || reducer functions

// | reducer helper function

const celcuisInput = ( input ) => {
    const converted = input * 1.8 + 32;
    return {
        degsC: input,
        degsF: converted,
    }
}

const fahrenheitInput = ( input ) => {
    const converted = (input - 32) * (5/9) ;
    return {
        degsC: converted,
        degsF: input,
    }
}

// | main reducer function
const reducer = (state, actions) => {
    const {type, input} = actions;
    switch (type) {
        case "DEG_C_INPUT" : return celciusInput(input);
        case "DEG_F_INPUT" : return fahrenheitInput(input);
        default: return state;

}

// component

const TempConverter = () => {

    const [ state, dispatch ] = useReduce( reducer, initialState );

    const { degsC, degsF } = state;

    return(
        <form>
            <label className="mt-3">
                Fahrenheit
            </label>
            <input
                type="number"
                className="ml-2"
                value={ fahrenheit }
                onChange={ (event) => dispatch({ type: "DEG_C_INPUT", input: event.currentTarget.value }) }
                />
            <label className="mt-3 ml-3">
                Celcuis
            </label>
            <input
                type="number"
                className="ml-2"
                value={ celcuis }
                onChange={ (event) => dispatch({ type: "DEG_F_INPUT", input: event.currentTarget.value }) }
            />
        </form>
    );

}

export default TempConverter;