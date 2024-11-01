import React from 'react';
import './play.css';

// import { Players } from './players';
// import { SimonGame } from './simonGame';

export function Play() {
  return (
    <main class="flex-grow-1 w-100">
    <div class="player-status text-center">
      <span class="player-name">User Name</span>
      <span class="playing-text">is playing!</span>
    <div class="button-grid"></div>
      <a href="../activePlay/activePlay.html"><button class="grid-button">Fun and Games</button></a>
      <a href="../activePlay/activePlay.html"><button class="grid-button">The World</button></a>
      <a href="../activePlay/activePlay.html"><button class="grid-button">Entertainment</button></a>

      <a href="../activePlay/activePlay.html"><button class="grid-button">Slogans</button></a>
      <a href="../activePlay/activePlay.html"><button class="grid-button">Sports</button></a>
      <a href="../activePlay/activePlay.html"><button class="grid-button">Snack Time</button></a>

      <a href="../activePlay/activePlay.html"><button class="grid-button">The Great Outdoors</button></a>
      <a href="../activePlay/activePlay.html"><button class="grid-button">Around the House</button></a>
      <a href="../activePlay/activePlay.html"><button class="grid-button">Urban Dictionary</button></a>
    </div>
</main>
  );
}
