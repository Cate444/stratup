import React, { useEffect } from 'react';
import './play.css';
import { NavLink } from 'react-router-dom';

export function Play() {
  // useEffect(() => {
  //   document.body.style.backgroundColor = 'white';
  //   //document.main.style.backgroundColor = 'white';
  //   return () => {
  //     document.body.style.backgroundColor = '';
  //     //document.main.style.backgroundColor = '';
  //   };
  // }, []);

  return (
    <div className="play-page">
      <main className="flex-grow-1 w-100">
        <div className="player-status text-center">
          <span className="player-name custom-color">User Name </span>
          <span className="playing-text text-dark">is playing!</span>
        </div>
        <div className="button-grid">
    <NavLink className='nav-link' to='/activePlay'><button className="grid-button">Fun and Games</button></NavLink>
    <NavLink className='nav-link' to='/activePlay'><button className="grid-button">The World</button></NavLink>
    <NavLink className='nav-link' to='/activePlay'><button className="grid-button">Entertainment</button></NavLink>
    <NavLink className='nav-link' to='/activePlay'><button className="grid-button">Slogans</button></NavLink>
    <NavLink className='nav-link' to='/activePlay'><button className="grid-button">Sports</button></NavLink>
    <NavLink className='nav-link' to='/activePlay'><button className="grid-button">Snack Time</button></NavLink>
    <NavLink className='nav-link' to='/activePlay'><button className="grid-button">Around the House</button></NavLink>
    <NavLink className='nav-link' to='/activePlay'><button className="grid-button">Urban Dictionary</button></NavLink>
    <NavLink className='nav-link' to='/activePlay'><button className="grid-button">Everything</button></NavLink>
    </div>
      </main>
    </div>
  );
}