import React from 'react';
import './sharedDecks.css';


export function SharedDecks(props) {
  return (
    <main class="flex-grow-1 w-100">
    <div class="player-status text-center">
      <span class="player-name">User Name</span>
      <span class="playing-text">is playing!</span>
    <div class="button-grid"></div>
        <a href="../activePlay/activePlay.html"><button class="grid-button">Name: Creator</button></a>
        <a href="../activePlay/activePlay.html"><button class="grid-button">Name: Creator</button></a>
        <a href="../activePlay/activePlay.html"><button class="grid-button">Name: Creator</button></a>

        <a href="../activePlay/activePlay.html"><button class="grid-button">Name: Creator</button></a>
        <a href="../activePlay/activePlay.html"><button class="grid-button">Name: Creator</button></a>
        <a href="../activePlay/activePlay.html"><button class="grid-button">Name: Creator</button></a>

        <a href="../activePlay/activePlay.html"><button class="grid-button">Name: Creator</button></a>
        <a href="../activePlay/activePlay.html"><button class="grid-button">Name: Creator</button></a>
        <a href="../activePlay/activePlay.html"><button class="grid-button">Name: Creator</button></a>
    </div>
</main>
  );
}
