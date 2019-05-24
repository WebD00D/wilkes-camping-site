import React, { Component } from 'react';

export default class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: false,
      renderNewRating: false
    };
  }

  updateRating(rating) {
    this.setState({
      rating,
      renderNewRating: false
    });
  }

  renderRatingDisplay() {
    if (!this.state.rating) {
      return (
        <div>
          <h3>No ratings yet! Be the first?</h3>
          <button onClick={() => this.setState({ renderNewRating: true })}>
            {' '}
            Rate this campsite{' '}
          </button>
        </div>
      );
    }

    return <h3>Rating: {this.state.rating} stars</h3>;
  }

  renderRatingButtons() {
    return (
      <div>
        <button onClick={() => this.updateRating(1)}>1</button>
        <button onClick={() => this.updateRating(2)}>2</button>
        <button onClick={() => this.updateRating(3)}>3</button>
        <button onClick={() => this.updateRating(4)}>4</button>
        <button onClick={() => this.updateRating(5)}>5</button>
      </div>
    );
  }

  handleDisplay() {
    if (this.state.renderNewRating) {
      return this.renderRatingButtons();
    }

    if (!this.state.renderNewRating) {
      return this.renderRatingDisplay();
    }
  }

  render() {
    return <div>{this.handleDisplay()}</div>;
  }
}

// What is this suppose to do?

// 1. Let a user create a rating on a campsite..
// 2. Display a rating to a user for a campsite..
