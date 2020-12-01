const Input = ({ inputChange, value }) => (
    <div className="form-group">
    <label className="mt-3" htmlFor="name">Input</label>
    <input 
        className="form-control" 
        id="name" 
        name="name" 
        type="text"
        onChange={ inputChange }
        value={ value }
    />
</div>
);

export default Input;