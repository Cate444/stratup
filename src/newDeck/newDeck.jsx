import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './newDeck.css';

export function NewDeck() {
  const [allWords, setAllWords] = useState([]);
  const [currentDeckName, setCurrentDeckName] = useState("");
  const [wordInput, setWordInput] = useState("");
  const [deckNameInput, setDeckNameInput] = useState("");

  const addWord = () => {
    if (wordInput.trim() !== "") {
      setAllWords([...allWords, wordInput.trim()]);
      setWordInput("");
    }
  };

  const nameDeck = () => {
    if (deckNameInput.trim() !== "") {
      setCurrentDeckName(deckNameInput.trim());
      setDeckNameInput("");
    }
  };

  return (
    <main className="new-deck-container">
     <div className="player-status text-center">
        </div>
        <img id="img" src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/03/cover-l.jpg" width="30%" height="auto" alt="Cover" />
        <h2 className="text-center text-light">Make Your Own</h2>
        <div>
          <div className="input-group mb-3">
            <span className="input-group-text">Enter a Word</span>
            <input 
              className="form-control" 
              type="text" 
              value={wordInput}
              onChange={(e) => setWordInput(e.target.value)}
              placeholder="Enter a word"
            />
            <button onClick={addWord} type="button" className="btn btn-primary">Add Word</button>
          </div>
        </div>
        <div>
          <div className="input-group mb-3">
            <span className="input-group-text">Deck Name</span>
            <input 
              className="form-control" 
              type="text" 
              value={deckNameInput}
              onChange={(e) => setDeckNameInput(e.target.value)}
              placeholder="Name" 
            />
            <NavLink className='nav-link' to='/yourDecks'> <button onClick={nameDeck} type="button" className="btn btn-primary">Create Deck</button></NavLink>
          </div>
        </div>
        <div id="wordBank">
          <h3 className="text-center text-light">Word Bank</h3>
          <div id="words">
            {currentDeckName && <h4>Deck Name: {currentDeckName}</h4>}
            <ul>
              {allWords.map((word, index) => (
                <li key={index}>{word}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
  );
}