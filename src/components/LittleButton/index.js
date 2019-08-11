import React, { Component } from 'react';

import * as S from './styles';

export default class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <S.LittleButton onClick={() => this.incrementCount()}>
        {this.props.text} {this.state.count}
      </S.LittleButton>
    );
  }
}
