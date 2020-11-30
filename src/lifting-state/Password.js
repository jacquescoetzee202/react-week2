import { Component } from "react";

class Password extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { handleChangeSubmit } = this.props;
        this.setState({ input: event.currentTarget.value })

        handleChangeSubmit( this.state.input );
    }

    render() {
        const { label, valid } = this.props;
        return(
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
                    value={this.state.input}
                    onChange={ this.handleChange }
                >
                </input>
            </form>
        );
    }

}

export default Password;