import React, { useEffect } from 'react';
import './play.css';
import { NavLink, useNavigate } from 'react-router-dom';

export function Play({ userName, setCategory }) {
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
            "Fun and Games",
            "The World",
            "Entertainment",
            "Slogans",
            "Sports",
            "Snack Time",
            "Around the House",
            "Urban Dictionary",
            "Everything"
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
