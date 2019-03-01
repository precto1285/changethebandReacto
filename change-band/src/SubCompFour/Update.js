import React, { Component } from 'react';
import Name from './Name';

class Update extends Component {

  inputHandler(e) {
    const name = e.target.value;
    this.props.updateHandler(name);
  }
  render() {
    return (
      <div>
        <Name value={this.props.name} name={this.props.name} />
        <input onChange={this.inputHandler.bind(this)} />
      </div>
    )
  }
}
export default Update;