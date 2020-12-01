import { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameInput: "",
            emailInput: "",
        }

        this.emailChange = this.emailChange.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);

    }

    emailChange(event) {
        this.setState({
            emailInput: event.currentTarget.value,
        });
    }
    
    nameChange(event) {
        this.setState({
            nameInput: event.currentTarget.value,
        });
    }

    handleFormSubmit(event) {
        let { handleSubmit } = this.props;
        let { nameInput, emailInput } = this.state;


        let loginObj = {
            name: nameInput,
            email: emailInput,
        }

        handleSubmit(loginObj);

        event.preventDefault();
    }

    render() {
        
        let { nameInput, emailInput } = this.state;


        return(
            <form onSubmit={ this.handleFormSubmit } className="containter" >
                <div className="form-group">
                    <label className="mt-3" htmlFor="name">Name</label>
                    <input 
                        className="form-control" 
                        id="name" 
                        name="name" 
                        type="text"
                        onChange={ this.nameChange }
                        value={ nameInput }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        className="form-control" 
                        id="email" 
                        name="email" 
                        type="email"
                        onChange={ this.emailChange }
                        value={ emailInput }
                    />
                </div>
                <input
                    className="btn btn-info container mt-3 mb-3"
                    type="submit"
                    value="Submit"
                >
                </input>
            </form>
        );
    }
}

export default Form;