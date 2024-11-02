import React from 'react';
import './login.css';
// import { Routes } from 'react-router';
// import { BrowserRouter, NavLink, Route, Routes, useNavigate } from 'react-router-dom';


export function Login() {
  return (
    <main className="container-fluid text-center">
      <div>
      <h1 className="welcome-text">Welcome to CatchPhrase</h1>
        <form method="get" action="play.html">
          <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <input className="form-control" type="text" placeholder="your@email.com" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">🔒</span>
            <input className="form-control" type="password" placeholder="password" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          <button type="submit" className="btn custom-color-btn text-white">Create</button>
        </form>
      </div>
    </main>
  );
}