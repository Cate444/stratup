import React from 'react';
import './sharedDecks.css';
import { BrowserRouter, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export function SharedDecks({ userName, setCategory }) {
  const navigate = useNavigate();

  const handleButtonClick = async (buttonName) => {
    try {
      const response = await fetch('/api/selectCategory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ category: buttonName }),
      });

      if (response.ok) {
        setCategory(buttonName); // Set the category in the parent state
        navigate('/activePlay');
      } else {
        console.error('Failed to send category to backend');
      }
    } catch (error) {
      console.error('Error sending category to backend:', error);
    }
  };


  return (
    <main className="flex-grow-1 w-100">
      <div className="player-status text-center">
        <span className="player-name">{userName} </span>
        <span className="playing-text text-dark">is playing!</span>
        <div className="button-grid">
          {[
            "The Office: example",
            "Name: Creator",
            "Name: Creator",
            "Name: Creator",
          ].map((buttonName) => (
            <button 
              key={buttonName}
              className="grid-button" 
              onClick={() => handleButtonClick(buttonName)}
            >
              {buttonName}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
