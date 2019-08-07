import React from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input.jsx";

function Greeting(props) {
    return (
        <p>{props.item}</p>
    ) 
}

function Toggle(props) {
    return (
        <p onClick={props.onClick}>{props.onoff}</p>
    ) 
}
class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            light_status: 0
        };
        // this.handleChange = this.handleChange.bind(this);
    }

    buttonClick() {
        this.props.onoff = "2"
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }


    render() {
        return (
            <div>
                <Button onoff="0" onClick={()=>this.buttonClick()}/>
            </div>
        )
    }
}
export default FormContainer;

ReactDOM.render(<FormContainer />,document.getElementById("create-article-form"));