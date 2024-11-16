import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './newDeck.css';

export function NewDeck({ updateDeckName }) {
  const [allWords, setAllWords] = useState([]);
  const [currentDeckName, setCurrentDeckName] = useState("");
  const [wordInput, setWordInput] = useState("");
  const [deckNameInput, setDeckNameInput] = useState("");
  const navigate = useNavigate();

  const addWord = () => {
    if (wordInput.trim() !== "") {
      setAllWords([...allWords, wordInput.trim()]);
      setWordInput("");
    }
  };

  const handleCreate = async () => {
    if (deckNameInput.trim() !== "") {
      try {
        const response = await fetch('/api/deckCreated', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            deckName: deckNameInput,
            words: allWords
          }),
        });

        if (response.ok) {
          updateDeckName(deckNameInput.trim()); // Update the deck name in App state
          setCurrentDeckName(deckNameInput.trim());
          setDeckNameInput("");
          navigate('/yourDecks'); // Redirect to yourDecks page
        } else {
          console.error('Failed to send deck name to backend');
        }
      } catch (error) {
        console.error('Error sending deck name to backend:', error);
      }
    }
  };

  return (
          <main className="new-deck-container">
           <div className="player-status text-center">
              </div>
              <img id="img" src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/03/cover-l.jpg" width="30%" height="auto" alt="Cover" />
              <h2 className="text-center custom-color">Make Your Own</h2>
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
        <button onClick={handleCreate} type="button" className="btn btn-primary">Create Deck</button>
      </div>
    </div>
              <div id="wordBank">
                <h3 className="text-center custom-color">Word Bank</h3>
                <div className="custom-color"id="words">
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