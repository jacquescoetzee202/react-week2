const Input = ({ inputChange, value, label, type, name }) => (
    <div className="form-group">
    <label className="mt-3" htmlFor={ name }>{label}</label>
    <input 
        className="form-control" 
        id={ name } 
        name={ name }
        type={ type }
        onChange={ inputChange }
        value={ value }
    />
</div>
);

export default Input;