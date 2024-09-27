# Startup

## Important Info:
Elastic IP: 18.210.83.161 
ssh -i [key pair file] ubuntu@18.210.83.161

## Elevator Pitch: 
Everyone loves to play the retro game catchphrase, but it needs a bit of updating. Making this game into a website will make it more accessible and the word bank more up-to-date. This also enables you to create and share your own decks. You can play catchphrases anywhere and with your personal word bank. 

## Technology:
* HTML - Uses correct HTML structure for application. A few HTML pages. One for login, one for categories, one for personal decks, and one for gameplay. 
* CSS - Making each page visually appealing
* JavaScript/React - Provides login, buttons for the game, choice, displays other players' decks, and backend endpoint calls.
* Service - Backend service with endpoints for:
  * Receiving and sharing decks
  *  Posting winning scores
* Authentication: An input for your user to create an account and log in.
* DB/Login - Store users, decks, and other information in a database. Register and login users. Credentials securely stored in database. You can't share or use shared decks unless authenticated.
* WebSocket - As each user creates and updates decks they are available to other users.

## Visuals:
![InPlay](https://github.com/user-attachments/assets/67deb223-32a2-4093-af48-5a58f07cc2bd)
![PersonalDecks](https://github.com/user-attachments/assets/a2a3b504-963a-402d-aabe-70e48443428f)
![HomePage](https://github.com/user-attachments/assets/1b23b422-a214-4a14-9235-7a09f0535058)

## HTML:
All pages have a header with title and links to other parts of the website and a footer with my name and GitHub
# Home Page (index.html)
* Welcom message
* login 
# Play (play.html)
* Choices of decks you can play that are built into the game
* links to active play
# Shared Decks (sharedDecks.html)
* shows other players decks
* links to active play
# Your Decks (yourDecks.html)
* shows your decks
* links to active play or newDecks page
# New Decks (newDecks.html)
* names deck
* add words to your deck
# Active Play (activePlay.html)
* shows teams scores on  sides
* gives you one word at a time
* next button
