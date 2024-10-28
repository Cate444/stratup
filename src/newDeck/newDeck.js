let allWords = []; // Array to hold all words
let currentDeckName = ""; // Variable to hold the current deck name
function addWord() {
    const input = document.getElementById("wordInput").value;
    if (input.trim() !== "") {
        // Add the new word to the array
        allWords.push(input.trim());
        
        // Update the word bank display
        displayWords();

        // Clear the input field
        document.getElementById("wordInput").value = "";
    }
}

// Function to display words in a list
function displayWords() {
    const wordBank = document.getElementById("words");
    wordBank.innerHTML = ""; // Clear the existing content

    // Create a list element
    const wordList = document.createElement("ul");

    // Loop through allWords and create list items
    allWords.forEach(word => {
        const listItem = document.createElement("li");
        listItem.textContent = word;
        wordList.appendChild(listItem);
    });

    // Append the list to the word bank
    wordBank.appendChild(wordList);

    // Display the current deck name
    if (currentDeckName) {
        const deckNameDisplay = document.createElement("h4");
        deckNameDisplay.textContent = `Deck Name: ${currentDeckName}`;
        wordBank.prepend(deckNameDisplay); // Add the deck name above the word list
    }
}

function nameDeck() {
    const deckNameInput = document.getElementById("deckNameInput").value;
    if (deckNameInput.trim() !== "") {
        currentDeckName = deckNameInput.trim(); // Store the deck name
        displayWords(); // Update the display to show the new deck name
        document.getElementById("deckNameInput").value = ""; // Clear the input field
    }
}

const wordBank = allWords
// ['word1', 'word2', 'word3', 'word4', 'word5'];
// wordBank.push(...allWords); // Add all words to the word bank
let currentIndex = 0;

function displayNextWord() {
    const wordBox = document.getElementById('word-box');
    wordBox.textContent = wordBank[currentIndex];
    currentIndex = (currentIndex + 1) % wordBank.length;
}

document.getElementById('next-button').addEventListener('click', displayNextWord);

// Initial word display
displayNextWord();