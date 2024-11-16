import React, { useState, useEffect } from 'react';
import './yourDecks.css';
import { NavLink, useNavigate } from 'react-router-dom';

export function YourDecks({ userName, deckName }) {
  const [deckNames, setDeckNames] = useState(() => {
    const savedDeckNames = localStorage.getItem('deckNames');
    return savedDeckNames ? JSON.parse(savedDeckNames) : [];
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (deckName && !deckNames.includes(deckName)) {
      const newDeckNames = [...deckNames, deckName];
      setDeckNames(newDeckNames);
      localStorage.setItem('deckNames', JSON.stringify(newDeckNames));
    }
  }, [deckName, deckNames]);

  const handleButtonClick = (buttonName) => {
    console.log(`Clicked on deck: ${buttonName}`);
    // Navigate to the activePlay route with the selected deck name
    navigate('/activePlay', { state: { selectedDeck: buttonName } });
  };

  return (
    <main className="flex-grow-1 w-100">
      <div className="player-status text-center">
        <span className="player-name">{userName} </span>
        <span className="playing-text text-dark">is playing!</span>
        <div className="button-grid">
          {deckNames.map((buttonName) => (
            <button 
              key={buttonName}
              className="grid-button" 
              onClick={() => handleButtonClick(buttonName)}
            >
              {buttonName}
            </button>
          ))}
          <NavLink className='nav-link' to='/newDeck'>
            <button className="grid-button">+</button>
          </NavLink> 
        </div>
      </div>
    </main>
  );
}