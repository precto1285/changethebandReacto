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
      <div className="bg-primary text-white">
        <BandOneSub
          band={bandState.band}
          style={bandState.style}
        />
      </div>
      <BandMember
        bandmember={bandState.bandmember[0]}
        role={bandState.role[0]}
      />
      <BandMember
        bandmember={bandState.bandmember[1]}
        role={bandState.role[1]}
      />
      <BandMember
        bandmember={bandState.bandmember[2]}
        role={bandState.role[1]}
      />
      <BandMember
        bandmember={bandState.bandmember[3]}
        role={bandState.role[2]}
      />
      <BandMember
        bandmember={bandState.bandmember[4]}
        role={bandState.bandmember[3]}
      />
      <br />
      <hr />
      <button className="btn btn-danger mb-3" onClick={clickHandler}>Change</button>
    </div>
  )
}

export default BandOne;