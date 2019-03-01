import React from 'react';

const BandMember = (props) => {
  return (
    <div>
      <h2>Name: {props.bandmember}</h2>
      <p>Role: {props.role}</p>
    </div>
  )
}

export default BandMember;