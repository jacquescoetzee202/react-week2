import { Component } from "react";
import Password from "./Password";

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            passwordInput: "",
            confirmInput: "",
        }
        this.passwordHandler =  this.passwordHandler.bind(this);
        this.confirmHandler =  this.confirmHandler.bind(this);
    }

    passwordHandler(event) {
        this.setState({ 
            passwordInput: event.currentTarget.value,
        });
    }
    
    confirmHandler(event) {
        this.setState({ 
            confirmInput: event.currentTarget.value,
        });
    }

    render() {
        const { passwordInput, confirmInput } = this.state;
        const { minimumLength } = this.props;

        const matchingCheck = passwordInput === confirmInput;
        const lengthCheck = passwordInput.length >= minimumLength;

        const validBool = matchingCheck && lengthCheck;

        return(
            <div className="container">
                <Password 
                    label="Password"
                    inputValue={ passwordInput }
                    handleChange={ this.passwordHandler }
                    valid={ validBool }
                />
                <Password 
                    label="Confirm Password"
                    inputValue={ confirmInput }
                    handleChange={ this.confirmHandler }
                    valid={ validBool }
                />
            </div>
        );
    }
}

export default SignUp;