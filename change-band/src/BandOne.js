import React, { useState } from 'react';

const BandOne = props => {
  const [bandState, setBandState] = useState(
    {
      band: [
        'Bonehead', 'Space Craft Time Machine', 'Styrophome', 'The After Sessions', 'Kapoteng Bakal', 'CircaSonic', 'The Edge', 'Three Headed Dog', 'Maximum Rock n Roll Quartet'],
      bandmember: ['Dino Navarra', 'Chico Cristobal', 'Paul Lacsamana', 'Monjo Balinghasay', 'Rich Recto', 'Pepoy Songco', 'Malek Lopez', 'Paul Zialcita', 'Jeremiah Chavez', 'Dean Robinson', 'Garin Wolfe', 'Chris Burns', 'Perfecto De Castro', 'David Aguirre', 'Basti Artadi', 'Tim De Ramos', 'John Vons', 'Hank Barun', 'David Fuller', 'Bucky Handley', 'Jonathan Berghouse', 'Wolf Gemora', 'Adrian Marquez-Barrios'],
      style: ['Hard Rock', 'Pop Rock', 'Funk Rock', 'Alternative']
    }
  )
  return (
    <h1>Band One</h1>
  )
}

export default BandOne;