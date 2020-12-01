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

    }

    handleFormSubmit(event) {
        
        event.preventDefault();

        let { handleSubmit, fields } = this.props;
        let { name, email } = this.state;

        let fieldNames = fields.map((input) => {
            return input.name;
        });

        console.log(fieldNames);


        let loginObj = {
            name: name,
            email: email,
        }


        handleSubmit(loginObj);

        this.props.fields.forEach(obj =>
            this.state[obj.name] = "",
        );

        this.setState({
            nameInput: "",
            emailInput: "",
        });

    }

    render() {
        
        let { name, email } = this.state;
        let { fields } = this.props;


        return(
            

            <form onSubmit={ this.handleFormSubmit } className="containter" >
                {fields.map((input, index) => {
                    let { label, name, type } = input;
                    return (
                        <Input 
                            inputChange={ this.inputChange }
                            value={ this.state[name] }
                            label={ label }
                            type={ type }
                            name={ name }
                            key={ index }
                        />
                    );
                })}
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