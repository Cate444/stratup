const express = require('express');
const uuid = require('uuid');
const app = express();

// let sharedDecks = []; // This should be replaced with a database in a real application

// apiRouter.get('/shared-decks', (req, res) => {
//   res.json(sharedDecks);
// });

// The scores and users are saved in memory and disappear whenever the service is restarted.
let users = {};
// let scores = [];

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = { email: req.body.email, password: req.body.password, token: uuid.v4() };
    users[user.email] = user;

    res.send({ token: user.token });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    if (req.body.password === user.password) {
      user.token = uuid.v4();
      res.send({ token: user.token });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', (req, res) => {
  const user = Object.values(users).find((u) => u.token === req.body.token);
  if (user) {
    delete user.token;
  }
  res.status(204).end();
});

apiRouter.get('/selectCategory', (req, res) => {
  console.log('category selected');
  res.send('Hello World!');
});

var deckData = { deckName: "testDeck" };
apiRouter.get('/deckCreated', (req, res) => {
  console.log('deck created');
  res.send(deckData);
});

var testData = { test: "testData" };
apiRouter.get('/test', (_req, res) => {
  console.log('in backend');
  console.log('Sending:', testData);
  res.send(testData);
});


// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
