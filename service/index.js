const { MongoClient } = require('mongodb');
const express = require('express');
const uuid = require('uuid');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const DB = require('./database.js');
const authCookieName = 'token';
const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const collection = client.db('authTest').collection('user');
const bodyParser = require('body-parser');

const {WebSocketServer} = require('ws');
app.use(express.static('./public'));


// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000; //*
server = app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

const wss = new WebSocketServer({ noServer: true });


server.on('upgrade', (request, socket, head) => {
  console.log('upgrade');
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});

let connections = [];

wss.on('connection', (ws) => {
  const connection = { id: connections.length + 1, alive: true, ws: ws };
  connections.push(connection);

  // ws.on('message', function message(data) {
  //   connections.forEach((c) => {
  //     if (c.id !== connection.id) {
  //       c.ws.send(data);
  //     }
  //   });
  // });

  ws.on('message', function message(data) {
    connections.forEach((c) => {
      c.ws.send(data);
    });
  });

  ws.on('close', () => {
    connections.findIndex((o, i) => {
    if (o.id === connection.id) {
      connections.splice(i, 1);
      return true;
    }
  });
 });

ws.on('pong', () => {
  connection.alive = true;
});
});


setInterval(() => {
  connections.forEach((c) => {
    if (!c.alive) {
      c.ws.terminate();
    } else {
      c.alive = false;
      c.ws.ping();
    }
  });
} , 10000);


// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});


function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

app.get('/user/me', async (req, res) => {
  authToken = req.cookies['token'];
  const user = await collection.findOne({ token: authToken });
  if (user) {
    res.send({ email: user.email });
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

function getUser(email) {
  return collection.findOne({ email: email });
}

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}

function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

// const port = 8080;
// app.listen(port, function () {
//   console.log(`Listening on port ${port}`);
// });

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// secureApiRouter verifies credentials for endpoints
const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  const authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// GetScores
secureApiRouter.get('/scores', async (req, res) => {
  const scores = await DB.getHighScores();
  res.send(scores);
});

// SubmitScore
secureApiRouter.post('/score', async (req, res) => {
  const score = { ...req.body, ip: req.ip };
  await DB.addScore(score);
  const scores = await DB.getHighScores();
  res.send(scores);
});

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

// const httpService = app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });


apiRouter.get('/selectCategory', (req, res) => {
  console.log('category selected');
  res.send('Hello World!');
});

var deckData = { deckName: "testDeck" };
apiRouter.get('/deckCreated', (req, res) => {
  console.log('deck created');
  res.send(deckData);
});

app.use(bodyParser.json());

let decks = {}; // In-memory storage for simplicity

app.post('/api/deck', (req, res) => {
    const { deckName, words } = req.body;
    
    if (!deckName || !words) {
        return res.status(400).send('Deck name and words are required.');
    }

    // Store the deck in memory (or a database)
    decks[deckName] = words;
    console.log(`Deck saved: ${deckName}`);
    res.status(200).send('Deck saved successfully.');
});

app.get('/api/deck/:deckName', (req, res) => {
    const { deckName } = req.params;

    if (decks[deckName]) {
        res.status(200).json({ deckName, words: decks[deckName] });
    } else {
        res.status(404).send('Deck not found.');
    }
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

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });

//const express = require('express');
// const app = express();

// Serve up our webSocket client HTML
//app.use(express.static('./public'));

// const port = process.argv.length > 2 ? process.argv[2] : 3000;
// server = app.listen(port, () => {
//   console.log(`Listening on ${port}`);
// });
