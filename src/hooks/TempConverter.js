import { useState } from "react";

const TempConverter = () => {

    const [ celcuis, setCelcuis ] = useState("");
    const [ fahrenheit, setFahrenheit ] = useState("");

    const celcuisChange = (event) => {
        const input = event.currentTarget.value;
        const converted = input * 1.8 + 32;
        setCelcuis( input );
        setFahrenheit( converted );
    }

    const fahrenheitChange = (event) => {
        const input = event.currentTarget.value;
        const converted = (input - 32) * (5/9) ;
        setFahrenheit( input );
        setCelcuis( converted );
    }

    return(
        <form>
            <label className="mt-3">
                Fahrenheit
            </label>
            <input
                type="number"
                className="ml-2"
                value={ fahrenheit }
                onChange={ fahrenheitChange }
            />
            <label className="mt-3 ml-3">
                Celcuis
            </label>
            <input
                type="number"
                className="ml-2"
                value={ celcuis }
                onChange={ celcuisChange }
            />
        </form>
    );
}

export default TempConverter;