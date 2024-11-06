import React from 'react';
import './login.css';
//import { NavLink } from 'react-router-dom';

// export function Login() {
//   return (
//     <main className="container-fluid text-center">
//       <div>
//         <h1 className="custom-color">Welcome to CatchPhrase</h1>
//         <form method="get" action="play.html">
//           <div className="input-group mb-3">
//             <span className="input-group-text">@</span>
//             <input className="form-control" type="text" placeholder="your@email.com" />
//           </div>
//           <div className="input-group mb-3">
//             <span className="input-group-text">🔒</span>
//             <input className="form-control" type="password" placeholder="password" />
//           </div>
//           <div className="button-container">
//             <NavLink className='nav-link' to='/play'>
//               <button type="button" className="btn btn-primary">Login</button>
//             </NavLink>
//             <NavLink className='nav-link' to='/play'>
//               <button type="button" className="btn custom-color">Create</button>
//             </NavLink>
//           </div>
//         </form>
//       </div>
//     </main>
//   );
// }


import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className='container-fluid bg-customer text-center'>
      <div>
        {authState !== AuthState.Unknown && <h1 className='custom-color'>Welcome to CatchPhrase</h1>}
        {authState === AuthState.Authenticated && (
          <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
      </div>
    </main>
  );
}