import React from 'react';

export function Login() {
  return (
    <main className="container-fluid text-center">
      <div>
        <h1>Welcome to CatchPhrase</h1>
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
          <button type="submit" className="btn">Create</button>
        </form>
      </div>
    </main>
  );
}