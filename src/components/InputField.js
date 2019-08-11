import React, { Component } from "react";
import { WithAuth } from "../contexts/AuthContext";

class InputField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      name: "Hello"
    };
  }

  setValue(fieldValue) {
    this.setState({
      value: fieldValue
    });

    // this.prop.setValue(fieldValue);
  }

  signInUser() {
    alert(this.state.value);
  }

  render() {
    return (
      <div>
        <label>{this.props.labelName}</label>
        <input
          onChange={e => this.setValue(e.target.value)}
          type={this.props.inputType}
        />
      </div>
    );
  }
}

export default WithAuth(InputField);
