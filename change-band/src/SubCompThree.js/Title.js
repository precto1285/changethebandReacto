import React from 'react';

const Title = props => {
  return (
    <div>
      <div className="jumbotron bg-secondary text-light">
        <h1>{props.title}</h1>
      </div>

    </div>
  )
}
export default Title;