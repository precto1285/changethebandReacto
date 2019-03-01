import React, { Component } from 'react';
class Title extends Component {

  render() {
    return (
      <div>
        <div className="jumbotron bg-secondary text-light">
          <Title title={this.props.title} />
        </div>
        <p>Instructions: Add Your Awesome Band Name Here!</p>
        <input />
      </div>
    )
  }
}
export default Title;


