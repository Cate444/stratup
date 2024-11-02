import React from 'react';
//import './activePlay.css';

export function ActivePlay() {
  return (
    <main class="flex-grow-1 w-100">
    <div class="player-status text-center">
        <span id="player-name">User Name</span>
        <span class="text-light">is playing!</span>
    </div>
    {/* <meta charset="UTF-8"> */}
    {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"> */}
    <h1 class="text-light">Category</h1>
    <div class="game-container">
        <div class="text-light">
          <h2>Team A</h2>
          <p id="team-a-score">0</p>
        </div>
        <div class="game-center">
          <div id="word-box">Example</div>
          <button onclick="displayNextWord()" id="next-button" type="submit" class="btn btn-primary">Next</button>
        </div>
        <div class="text-light">
          <h2>Team B</h2>
          <p id="team-b-score">0</p>
        </div>
      </div>

    <div class="popup-overlay" id="popupOverlay">
      <div class="popup">
        <h2 class="text-light">Who won that round?</h2>
        <button type="submit" class="btn btn-primary">Team 1</button>
        <button type="submit" class="btn btn-primary">Team 2</button>
      </div>
    </div>
    <div class="popup-overlay" id="popupOverlay">
      <div class="popup">
        <h2 class="text-light">Do you want to keep playing?</h2>
        <button type="submit" class="btn btn-primary">Yes</button>
        <button type="submit" class="btn btn-primary">Exit</button>
      </div>
    </div>
    <script src="activePlay.js"></script>
</main>
  );
}