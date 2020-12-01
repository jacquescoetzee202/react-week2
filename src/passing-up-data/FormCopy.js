import { Component } from "react";
import Input from "./Input";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.props.fields.forEach(obj =>
            this.state[obj.name] = "",
        );

        this.inputChange = this.inputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);

    }

    inputChange(event) {
        let { name, value } = event.currentTarget;
        this.setState(() => {
            let obj = {};
            obj[name] = value;
            return obj;
        });

        console.log("triggered input change");
    }

    handleFormSubmit(event) {
        let { handleSubmit } = this.props;
        let { name, email } = this.state;


        let loginObj = {
            name: name,
            email: email,
        }

        handleSubmit(loginObj);

        event.preventDefault();
    }

    render() {
        
        let { name, email } = this.state;
        let { fields } = this.props;

        console.log(fields);


        return(
            <form onSubmit={ this.handleFormSubmit } className="containter" >
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        className="form-control" 
                        id="email" 
                        name="email" 
                        type="email"
                        onChange={ this.inputChange }
                        value={ email }
                    />
                </div>
                <Input inputChange={ this.inputChange } value={ this.state.name }/>
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