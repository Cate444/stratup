import React from 'react';
import './sharedDecks.css';
import { BrowserRouter, NavLink, Route, Routes, useNavigate } from 'react-router-dom';


export function SharedDecks(props) {
  return (
    <main class="flex-grow-1 w-100">
    <div class="player-status text-center">
      <span class="player-name">User Name </span>
      <span class="playing-text text-dark">is playing!</span>
    <div class="button-grid">
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
