const Password = ({ label, valid, handleChange, inputValue }) => (
    <form className="container">
        <label>
            { label }
        </label>
        <input
            type="password" 
            style={{
                display: "block",
                borderColor: valid ? "lime" : "red",
                borderRadius: 5
            }}
            value={inputValue}
            onChange={ handleChange }
        />
    </form>
);



export default Password;