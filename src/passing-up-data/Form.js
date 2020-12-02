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
        
        //passing the current state to the handleSubmit function
        handleSubmit(this.state);

        // creating an object with same keys as state and values as empty strings
        let resetStateObj = fields.reduce((obj, input) => {
            obj[input.name] = "";
            return obj;
        },{});

        // reseting the state to empty values object
        this.setState(resetStateObj);

    }

    render() {
        
        let { fields, submit } = this.props;

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
                    value={ submit }
                >
                </input>
            </form>
        );
    }
}

export default Form;