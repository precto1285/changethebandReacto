import React, { Component } from 'react';
import Update from './SubCompFour/Update';

class BandFour extends Component {
  constructor() {
    super();
    this.state = {
      name: "Phil"
    }
  }

  updateHandler(name) {
    this.setState(
      { name }
    );
  }

  render() {
    return (
      <div>
        <h1>Band Four</h1>
        <Update
          updateHandler={this.updateHandler.bind(this)}
          name={this.state.name}
        />
      </div>
    )
  }
}

export default BandFour;