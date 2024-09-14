# startup
Elastic IP: 18.210.83.161 
ssh -i [key pair file] ubuntu@18.210.83.161
##Elevator Pitch: 
Everyone loves to play the retro game catchphrase, but it needs a bit of updating. Making this game into a website will make it more accessible and the word bank more up-to-date. This also enables you to create and share your own decks. You can play catchphrases anywhere and with your personal word bank. 

##Technologies
HTML - Uses correct HTML structure for application. A few HTML pages. One for login, one for categories, one for personal decks, and one for gameplay. 
CSS - Making each page visually appealing
JavaScript/React - Provides login, buttons for the game, choice, displays other players' decks, and backend endpoint calls.
Service - Backend service with endpoints for:
Receiving and sharing decks
Posting winning scores
Authentication: An input for your user to create an account and log in.
DB/Login - Store users, decks, and other information in a database. Register and login users. Credentials securely stored in database. You can't share or use shared decks unless authenticated.
WebSocket - As each user creates and updates decks they are available to other users.

