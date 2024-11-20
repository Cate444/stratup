import React from 'react';
import { BrowserRouter, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Play } from './play/play.jsx';
import { SharedDecks } from './sharedDecks/sharedDecks.jsx';
import { YourDecks } from './yourDecks/yourDecks.jsx';
import { Login } from './login/login.jsx';
import { ActivePlay } from './activePlay/activePlay.jsx';
import { NewDeck } from './newDeck/newDeck.jsx';
import { AuthState } from './login/authState';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function NotFound() {
  return <main> 404 Not Found </main>;
}

export default function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);
  const [category, setCategory] = React.useState('');
  const [deckNameInput, setDeckNameInput] = React.useState("");
  const [deckName, setDeckName] = React.useState("");
  const [deckObject, setDeckObject] = React.useState({});

  const updateDeckName = (name) => {
    setDeckName(name);
  };
  
  return (
    <BrowserRouter>
      <div className='body text-light'>
        <header className='container-fluid text-center'>
          <nav className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top flex-column'>
            <div className='container-fluid d-flex justify-content-center'>
            <a className='navbar-brand mb-0 h1' style={{ fontSize: '5rem' }}>
              CatchPhrase<sup>&reg;</sup></a>
            </div>
            <div className='navbar-collapse justify-content-center'>
              <ul className='navbar-nav'>

              <li className='nav-item'>
              <NavLink className='nav-link' style={{ fontSize: '1.5rem' }} to=''>
                  Login
                </NavLink>
              </li>
              {authState === AuthState.Authenticated && (
                <li className='nav-item'>
                  <NavLink className='nav-link'style={{ fontSize: '1.5rem' }}to='play'>
                    Play
                  </NavLink>
                </li>
              )}
              {authState === AuthState.Authenticated && (
                <li className='nav-item'>
                 <NavLink className='nav-link' style={{ fontSize: '1.5rem' }} to='/sharedDecks'>Shared Decks</NavLink>
                </li>
              )}
              <li className='nav-item'>
              <NavLink className='nav-link' style={{ fontSize: '1.5rem' }} to='/yourDecks'>Your Decks</NavLink>
              </li>     
              </ul> 
            </div>
          </nav>
        </header>

        <Routes>
        <Route
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            />
                    <Route path='/yourDecks' element={
          <YourDecks 
            userName={userName} 
            deckName={deckName} 
            setCategory={setCategory}
            deckObject={deckObject}
            setDeckObject={setDeckObject}
          />
        } />
        <Route path='/activePlay' element={
          <ActivePlay 
            category={category} 
            deckObject={deckObject}
          />
        } />  
        <Route path='/newDeck' element={
          <NewDeck 
            updateDeckName={updateDeckName} 
            setDeckObject={setDeckObject} 
          />
        } />  

          <Route path='/' element={<Login />} />
          <Route path='/play' element={<Play userName={userName} setCategory={setCategory} />} />
          <Route path='/sharedDecks' element={<SharedDecks userName={userName} setCategory={setCategory}/>} />
          {/* <Route path='/yourDecks' element={<YourDecks userName={userName} deckName={deckName} setCategory={setCategory} />} /> */}
          <Route path='*' element={<NotFound />} />
          {/* <Route path='/activePlay' element={<ActivePlay category={category} deckObject={deckObject}/>} />   */}
          {/* <Route path='/newDeck' element={<NewDeck updateDeckName={updateDeckName} setDeckObject={setDeckObject} />} />   */}
        </Routes>

        <footer className='bg-primary w-100'>
          <div className='container-fluid'>
            <span className='text-reset'>Cate Allen</span>
            <a className='text-reset float-end' href='https://github.com/Cate444/stratup'>
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}