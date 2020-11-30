import { Component } from "react";
import Square from "./Square";

class Squares extends Component {

    render() {
        return (
            <div className="container">
                <Square />
                <Square />
            </div>
            
        );
    }
}

export default Squares;