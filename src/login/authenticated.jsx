// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// import Button from 'react-bootstrap/Button';

// import './authenticated.css';

// async function loginOrCreate(endpoint) {
//   const response = await fetch(endpoint, {
//     method: 'post',
//     body: JSON.stringify({ email: userName, password: password }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   });
//   if (response?.status === 200) {
//     localStorage.setItem('userName', userName);
//     props.onLogin(userName);
//   } else {
//     const body = await response.json();
//     setDisplayError(`⚠ Error: ${body.msg}`);
//   }
// }

// export function Authenticated(props) {
//   const navigate = useNavigate();

//   function logout() {
//     localStorage.removeItem('userName');
//     props.onLogout();
//   }

//   return (
//     <div>
//       <div className='playerName'>{props.userName}</div>
//       <Button variant='primary' onClick={() => navigate('/play')}>
//         Play
//       </Button>
//       <Button variant='light' onClick={() => logout()}>
//         Logout
//       </Button>
//     </div>
//   );
// }

import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import './authenticated.css';

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('userName');
        props.onLogout();
      });
  }

  return (
    <div>
      <div className='playerName'>{props.userName}</div>
      <Button variant='primary' onClick={() => navigate('/play')}>
        Play
      </Button>
      <Button variant='secondary' onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
}