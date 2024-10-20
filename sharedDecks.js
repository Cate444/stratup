const button = document.getElementById('B1');
button.textContent = "New Button Text"; // Correctly set the text content

// Create a new button element
const newButton = document.createElement('button');

// Set the button's text
newButton.textContent = 'Click me!';

// Add some basic styling (optional)
newButton.style.padding = '10px 20px';
newButton.style.fontSize = '16px';
newButton.style.backgroundColor = '#4CAF50';
newButton.style.color = 'white';
newButton.style.border = 'none';
newButton.style.borderRadius = '5px';
newButton.style.cursor = 'pointer';

// Add a click event listener to the button
newButton.addEventListener('click', function() {
    alert('Button clicked!');
});

// Add the button to the body of the document
document.main.appendChild(newButton);