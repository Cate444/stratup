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
### Home Page (index.html)
* Welcom message
* login 
### Play (play.html)
* Choices of decks you can play that are built into the game
* links to active play
### Shared Decks (sharedDecks.html)
* shows other players decks
* links to active play
### Your Decks (yourDecks.html)
* shows your decks
* links to active play or newDecks page
### New Decks (newDecks.html)
* names deck
* add words to your deck
### Active Play (activePlay.html)
* shows teams scores on  sides
* gives you one word at a time
* next button

## CSS:
### Header, footer, and main content body
* light blue colored body
* dark blue footer and header
### Navigation elements
* Each elment or button links to correct pages
### Responsive to window resizing
* everthing icluding title resizes
### Application elements
* login
* add new item to deck
### Application text content
* light text
### Application images
* Micheal Scott in add new deck

### React deliverable
For this deliverable I used JavaScript and React so that the application completely works for a single user. I also added placeholders for future technology.
 * Bundled and transpiled - done!
 * Components - Login, creating decks, playing decks,and login, WebSocket.
 * login - When you press enter or the login button it say welcome user name.
 * database - Displayed the words in a deck. Currently personal decks are stored and retrieved from local storage, but it will be replaced with the database data later.
 * WebSocket - Decks will be shared between player. This will be replaced with WebSocket messages later.
 * Router - Routing between login and game components.
 * Hooks - uses hooks to set user name.

### Startup Service 
* I created an HTTP service using Node.js and Express
* I have a frontend served up using Express static middleware
* My frontend calls third party service endpoints, to get the random quote on the New Decks page
* My backend provides service endpoints at when passing deck names, and user name between pages
* My front calls these end points each time someone logs in, starts a new game, or creates a new deck

### Startup Login
* my application supports new user registration
* Existing user get authenticated and can logout
* usernames, tokens, and passawords are in MongoDB
* Stores and retrieves credentials in MongoDB
* Restricts application functionality based upon authentication with only letting you access play when not logged in

### Websocket
side note: For how my application ended up working I changed what was doing with my websockets :)
* Backend listens for WebSocket connection
* Frontend makes WebSocket connection
* messages sent over WebSocket connection
* messsages are displayed
* All visible elements are working - Some of your application functionality has been mocked up in previous version of the startup. Your application should feel fully functional.

