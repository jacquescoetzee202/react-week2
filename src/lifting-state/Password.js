const Password = ({ label, valid, handleChange, inputValue }) => (
    <form className="container">
        <label>
            { label }
        </label>
        <input 
            type="password" 
            style={{
                display: "block",
                border: `2px solid ${ valid ? "lime" : "red" }`,
                borderRadius: 5
            }}
            value={inputValue}
            onChange={ handleChange }
        >
        </input>
    </form>
);



export default Password;