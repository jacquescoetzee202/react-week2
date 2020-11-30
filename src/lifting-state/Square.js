const Square = ({ selected, handleClick, colour }) => (
    <div onClick={ handleClick } style={{
        backgroundColor: selected ? "green" : colour ,
        height: 200,
        width: 200,
        marginTop: 20,
        marginBottom: 20
    }} className="container">
    </div>
);



Square.defaultProps = {
    colour: "pink"
}

export default Square;

