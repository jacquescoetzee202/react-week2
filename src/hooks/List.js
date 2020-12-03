import { useState } from "react";

const List = () => {

    const [ list, setList ] = useState([]);
    const [ input, setInput ] = useState("");

    const handleChange = (event) => {
        setInput(event.currentTarget.value);
        console.log(typeof event.currentTarget.value);
    }

    const handleClick = () => {
        setList([...list,input]);
    }

    return(
        <>
            <form>
                <label className="mt-3">
                    New list item
                </label>
                <input
                    type="text" 
                    value={input}
                    onChange={ handleChange }
                />
            </form>
            <ul className="list-group">
                { list.map((item, index) => {
                    return(
                        <li 
                            className="list-group-item"
                            key={ index }
                        >
                            { item }
                        </li>
                    );
                })}
            </ul>
            <button
                type="button"
                className="btn btn-secondary"
                onClick={ handleClick }
            >
                Add to list
            </button>

        </>
    );
}

export default List;