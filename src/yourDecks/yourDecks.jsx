import React from 'react';
import './yourDecks.css';
import { BrowserRouter, NavLink, Route, Routes, useNavigate } from 'react-router-dom';


export function YourDecks() {
  return (
<main class="flex-grow-1 w-100">
<div class="player-status text-center">
  <span class="player-name">User Name </span>
  <span class="playing-text text-dark">is playing!</span>
<div class="button-grid">
  <NavLink className='nav-link' to='/activePlay'><button className="grid-button">The Office</button></NavLink>
  <NavLink className='nav-link' to='/activePlay'><button className="grid-button">Allen Family Fun</button></NavLink>
  <NavLink className='nav-link' to='/activePlay'><button className="grid-button">Music</button></NavLink>
  <NavLink className='nav-link' to='/activePlay'><button className="grid-button">Freshman Year</button></NavLink>
  <NavLink className='nav-link' to='/activePlay'><button className="grid-button">Decades</button></NavLink>
  <NavLink className='nav-link' to='/activePlay'><button className="grid-button">Slogans</button></NavLink>
  <NavLink className='nav-link' to='/activePlay'><button className="grid-button">Hawaiian Times</button></NavLink>
  <NavLink className='nav-link' to='/newDeck'><button className="grid-button">+</button></NavLink> 
  </div>
</div>
</main> 
  );
}