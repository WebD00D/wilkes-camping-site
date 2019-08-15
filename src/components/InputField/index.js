import React, { Component } from "react";
import { WithAuth } from "../../contexts/AuthContext";
import * as S from "./styles";

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
      <S.InputField>
        {/* <label>{this.props.labelName}</label> */}
        <input
          onChange={e => this.setValue(e.target.value)}
          type={this.props.inputType}
          placeholder={this.props.placeholder}
        />
      </S.InputField>
    );
  }
}

export default WithAuth(InputField);
