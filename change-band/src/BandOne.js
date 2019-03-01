import React, { useState } from 'react';
import BandOneSub from './SubComp/BandOneSub';
import BandMember from './SubComp/BandMember';

const BandOne = props => {
  const [bandState, setBandState] = useState(
    {
      band: 'Bonehead',
      bandmember: [
        'Dino Navarra', 'Chico Cristobal', 'Monjo Balinghasay', 'Phil Recto', 'Paul Lacsamana'
      ],
      role: [
        'Vocal', 'Guitar', 'Bass', 'Drums'
      ],
      style: 'Hard Rock'
    }
  )

  const clickHandler = () => {
    setBandState({
      band: 'Kapoteng Bakal',
      bandmember: [
        'Basti Artadi', 'Perfecto De Castro', 'David Aguirre', 'Phil Recto', 'Tim De Ramos'
      ],
      role: [
        'Vocal', 'Guitar', 'Bass', 'Drums'
      ],
      style: 'Hard Rock'
    })
  }

  return (
    <div>
      <BandOneSub
        band='Bonehead'
        style='Hard Rock'
      />
      <hr />
      <BandMember
        bandmember='Dino Navarra'
        role='Vocals'
      />
      <BandMember
        bandmember='Chico Cristobal'
        role='Guitar'
      />
      <BandMember
        bandmember='Monjo Balinghasay'
        role='Guitar'
      />
      <BandMember
        bandmember='Phil Recto'
        role='Bass'
      />
      <BandMember
        bandmember='Paul Lacsamana'
        role='Drums'
      />
      <br />
      <hr />
      <button onClick={clickHandler}>Change</button>
    </div>
  )
}

export default BandOne;