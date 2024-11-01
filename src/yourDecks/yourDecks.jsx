import React from 'react';
import './yourDecks.css';
//import { ActivePlay } from '../activePlay/activePlay';

export function YourDecks() {
  return (
<main class="flex-grow-1 w-100">
<div class="player-status text-center">
  <span class="player-name">User Name</span>
  <span class="playing-text">is playing!</span>
<div class="button-grid"></div>
  <a href="../activePlay/activePlay.html"><button class="grid-button">The Office</button></a>
  <a href="../activePlay/activePlay.html"><button class="grid-button">Allen Family Fun</button></a>
  <a href="../activePlay/activePlay.html"><button class="grid-button">Music</button></a>
  <a href="../activePlay/activePlay.html"><button class="grid-button">Freshman Year</button></a>
  <a href="../activePlay/activePlay.html"><button class="grid-button">Decades</button></a>
  <a href="../activePlay/activePlay.html"><button class="grid-button">Slogans</button></a>
  <a href="../activePlay/activePlay.html"><button class="grid-button">Hawaiian Times</button></a>
  <a href="../newDeck/newDeck.html"><button class="grid-button">+</button></a>
</div>
</main>
  );
}