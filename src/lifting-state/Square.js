import { Component} from "react";


class Square extends Component {

    constructor(props) {
        super(props);

        this.state = {
            clickStatus: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let current = this.state.clickStatus;

        this.setState({ clickStatus: !current });
    }

    render() {
        let colour = this.state.clickStatus ? "green" : this.props.colour;

        return (
            <div onClick={ this.handleClick } style={{
                backgroundColor: colour,
                height: 200,
                width: 200,
                marginTop: 20,
                marginBottom: 20
            }} className="container"></div>
        );
    }
}

Square.defaultProps = {
    colour: "pink"
}

export default Square;

