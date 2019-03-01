import React, { Component } from 'react';
import Title from './Title'

class Header extends Component {

  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div>
        <div className="jumbotron bg-secondary text-white">
          <Title
            title={this.props.title}
          />
          <input
            onChange={this.handleChange.bind(this)}
          />
        </div>
      </div>
    )
  }
}



export default Header;
