import { Component } from "react";

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let { count } = this.state;
        let updated = count + 1;
        
        this.setState({ count: updated });

        this.props.handleUpdate(updated);
    }



    render() {
        let { count } = this.state;
        return(
            <button
                className="btn btn-success container mt-3"
                onClick={ this.handleClick }
            >
                Click Me!!! current count : {count}
            </button>
        );
    }
}

export default Button;