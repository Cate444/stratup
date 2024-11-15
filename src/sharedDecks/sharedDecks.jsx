import React from 'react';
import './sharedDecks.css';
import { BrowserRouter, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export function SharedDecks() {
   const [testStuff, setStuff] = React.useState("Starting Test");
  //  const [sharedDecks, setSharedDecks] = React.useState([]);

  //   React.useEffect(() => {
  //     fetch('/api/shared-decks')
  //       .then(response => response.json())
  //       .then(data => setSharedDecks(data));
  //   }, []);

  function handleClick() {
  //   console.log('Button clicked');
    fetch('/api/test')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((testing) => {
        console.log('Full response:', testing);
        console.log('testing.test:', testing.test);
        setStuff(testing.test);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

    // console.log('Button clicked');
    // fetch('/api/test')
    //   .then((response) => response.json())
    //   .then((testing) => {
    //     console.log(testing.test);t
    //     setStuff(testing.test);
    //   });
    // }  

    // {sharedDecks.map(deck => (
    //   <NavLink key={deck.id} className='nav-link' to={`/activePlay/${deck.id}`}>
    //     <button className="grid-button">Name: {deck.name} Creator: {deck.creator}</button>
    //   </NavLink>
    // ))}
  
  return (
    <main className="flex-grow-1 w-100">
      <Button onClick={handleClick}>Test</Button>
      <div className='text-dark'> {testStuff} </div>
    <div className="player-status text-center">
      <span className="player-name">User Name </span>
      <span className="playing-text text-dark">is playing!</span>
    <div className="button-grid">
    <NavLink className='nav-link' to='/activePlay'><button className="grid-button">Name: Creator</button></NavLink>
    <NavLink className='nav-link' to='/activePlay'><button className="grid-button">Name: Creator</button></NavLink>
    <NavLink className='nav-link' to='/activePlay'><button className="grid-button">Name: Creator</button></NavLink>
    <NavLink className='nav-link' to='/activePlay'><button className="grid-button">Name: Creator</button></NavLink>
    <NavLink className='nav-link' to='/activePlay'><button className="grid-button">Name: Creator</button></NavLink>
    </div>
    </div>
</main>
  );
}
