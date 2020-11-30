import { Component } from "react";
import Square from "./Square";

class Squares extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 2,
        }
    }

    render() {
        return (
            <div className="container">
                <Square 
                    colour={ this.props.color }
                    selected={ this.state.selected === 1 }
                    handleClick={ () => this.setState({ selected: 1 }) }
                    />
                <Square 
                    colour={ this.props.color }
                    selected={ this.state.selected === 2 }
                    handleClick={ () => this.setState({ selected: 2 }) }
                    />
            </div>
        );
    }
}

export default Squares;