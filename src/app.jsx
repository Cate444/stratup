import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './app.css';
import { Play } from './play/play.jsx';
import { SharedDecks } from './sharedDecks/sharedDecks.jsx';
import { YourDecks } from './yourDecks/yourDecks.jsx';
import { Login } from './login/login.jsx';
import { ActivePlay } from './activePlay/activePlay.jsx';
import { NewDeck } from './newDeck/newDeck.jsx';

export function NavButton({ text, url }) {
  const navigate = useNavigate();
  return (
    <Button variant='primary' onClick={() => navigate(url)}>
      {text}
    </Button>
  );
}

function NotFound() {
  return <main> 404 Not Found </main>;
}


export default function App() {
  return (
    <BrowserRouter>
      <div className='body text-light'>
        <header className='container-fluid text-center'>
          <nav className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top flex-column'>
            <div className='container-fluid d-flex justify-content-center'>
              <a className='navbar-brand mb-0 h1'>
                CatchPhrase<sup>&reg;</sup>
              </a>
            </div>
            <div className='navbar-collapse justify-content-center'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <NavLink className='nav-link' to=''>Home</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/play'>Play</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/sharedDecks'>Shared Decks</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/yourDecks'>Your Decks</NavLink>
                </li>
              </ul> 
            </div>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/play' element={<Play />} />
          <Route path='/sharedDecks' element={<SharedDecks />} />
          <Route path='/yourDecks' element={<YourDecks />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/activePlay' element={<ActivePlay />} /> 
          <Route path='/newDeck' element={<NewDeck />} /> 
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