import React, { useState } from 'react';
import BandOrigin from './SubCompTwo/BandOrigin';
import SongList from './SubCompTwo/SongList';

const BandTwo = props => {
  return (
    <div>
      <SongList song='{}' />
      <BandOrigin bandorigin='{}' />
    </div>
  )
}

export default BandTwo;