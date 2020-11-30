import { Component } from "react";
import Password from "./Password";

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            valid: false,
            passwordInput: "",
            confirmInput: "",
        }
        this.passwordHandler =  this.passwordHandler.bind(this);
        this.confirmHandler =  this.confirmHandler.bind(this);
    }

    passwordHandler(value) {
        const { minimumLength } = this.props;
        if(value.length >= minimumLength) {
            this.setState({ 
                passwordInput: value,
                valid: value === this.state.confirmInput,
            });
        }
        console.log(value);
    }
    
    confirmHandler(value) {
        const { minimumLength } = this.props;
        if(value.length >= minimumLength) {
            this.setState({ 
                confirmInput: value,
                valid: value === this.state.passwordInput,
            });
        }
        console.log(value);
    }

    render() {
        return(
            <div className="container">
                <Password 
                    label="Password"
                    handleChangeSubmit={ this.passwordHandler }
                    valid={ this.state.valid }
                />
                <Password 
                    label="Confirm Password"
                    handleChangeSubmit={ this.confirmHandler }
                    valid={ this.state.valid }
                />
            </div>
        );
    }
}

export default SignUp;