import React, { useState } from 'react';
import BandOrigin from './SubCompTwo/BandOrigin';
import SongList from './SubCompTwo/SongList';

const BandTwo = props => {
  const [songState, setSongState] = useState({
    song: ['Center of The Sun', 'Goodbye Rye', 'Take Me Home', 'Hari ng Sari-Sari'],
    bandorigin: ['Wolfgang', 'Basti & Perf', 'Triaxis', 'Bonehead']
  })

  const changeSetHandler = () => {
    setSongState({
      song: ['Giyang', 'Natutulog Kong Mundo', 'Ang Himig Natin', 'Beep Beep'],
      bandorigin: ['Razorback', 'Wolfgang', 'Juan De La Cruz Band']
    })
  }

  return (
    <div>
      <h2><SongList song={songState.song[0]} /></h2>
      <h3><BandOrigin bandorigin={songState.bandorigin[0]} /></h3>
      <b />
      <h2><SongList song={songState.song[1]} /></h2>
      <h3><BandOrigin bandorigin={songState.bandorigin[1]} /></h3>
      <b />
      <h2><SongList song={songState.song[2]} /></h2>
      <h3><BandOrigin bandorigin={songState.bandorigin[2]} /></h3>
      <b />
      <h2><SongList song={songState.song[3]} /></h2>
      <h3><BandOrigin bandorigin={songState.bandorigin[2]} /></h3>
      <b />
      <button className="btn btn-primary" onClick={changeSetHandler}>Side B</button>
    </div>
  )
}

export default BandTwo;