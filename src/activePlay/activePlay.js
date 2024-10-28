const wordBank = ['word1', 'word2', 'word3', 'word4', 'word5'];
let currentIndex = 0;

function displayNextWord() {
    const wordBox = document.getElementById('word-box');
    wordBox.textContent = wordBank[currentIndex];
    currentIndex = (currentIndex + 1) % wordBank.length;
}

document.getElementById('next-button').addEventListener('click', displayNextWord);

// Initial word display
displayNextWord();