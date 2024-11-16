import './activePlay.css';
import React, { useState, useEffect } from 'react';

export function ActivePlay(props) {
  const [currentWord, setCurrentWord] = useState('');
  const [wordBank] = useState(['word1', 'word2', 'word3', 'word4', 'word5']);
  const [currentIndex, setCurrentIndex] = useState(0);
  const category = props.category;

  useEffect(() => {
    displayNextWord();
  }, []); // This will run once when the component mounts

  const displayNextWord = () => {
    setCurrentWord(wordBank[currentIndex]);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % wordBank.length);
  };

  return (
    <main className="flex-grow-1 w-100">
      <div className="player-status text-center">
      </div>
      <h1 className="text-primary">{category}</h1>
      <div className="game-container">
        <div className="text-light">
          <h2 className='custom-color'>Team A</h2>
          <p id="team-a-score">0</p>
        </div>
        <div className="game-center">
          <div id="word-box">{currentWord}</div>
          <button onClick={displayNextWord} id="next-button" type="button" className="btn btn-primary">
            Next
          </button>
        </div>
        <div className="text-light">
          <h2 className='custom-color'>Team B</h2>
          <p id="team-b-score">0</p>
        </div>
      </div>
    </main>
  );
}