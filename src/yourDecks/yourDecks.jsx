import React, { useState, useEffect } from 'react';
import './yourDecks.css';
import { NavLink, useNavigate } from 'react-router-dom';

export function YourDecks({ userName, deckName, setCategory }) {
  const [deckNames, setDeckNames] = useState(() => {
    const savedDeckNames = localStorage.getItem('deckNames');
    return savedDeckNames ? JSON.parse(savedDeckNames) : [];
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (deckName && !deckNames.includes(deckName)) {
      const newDeckNames = [...deckNames, deckName];
      setDeckNames(newDeckNames);
      localStorage.setItem('deckNames', JSON.stringify(newDeckNames));
    }
  }, [deckName, deckNames]);

  const handleButtonClick = async (buttonName) => {
    try {
      const response = await fetch('/api/selectCategory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ category: buttonName }),
      });

      if (response.ok) {
        setCategory(buttonName); // Set the category in the parent state
        navigate('/activePlay');
      } else {
        console.error('Failed to send category to backend');
      }
    } catch (error) {
      console.error('Error sending category to backend:', error);
    }
  };

  return (
    <main className="flex-grow-1 w-100">
      <div className="player-status text-center">
        <span className="player-name">{userName} </span>
        <span className="playing-text text-dark">is playing!</span>
        <div className="button-grid">
        {deckNames.length > 0 ? (
          deckNames.map((buttonName) => (
            console.log(buttonName),
            <button 
              key={buttonName}
              className="grid-button" 
              onClick={() => handleButtonClick(buttonName)}
            >
              {buttonName}
            </button>
          ))): (
            <p>no decks</p>
         )}
          <NavLink className='nav-link' to='/newDeck'>
            <button className="grid-button">+</button>
          </NavLink> 
        </div>
      </div>
    </main>
  );
}

// import React, { useState, useEffect } from 'react';
// import './yourDecks.css';
// import { NavLink, useNavigate } from 'react-router-dom';

// export function YourDecks({ userName, deckName, setCategory }) {
//   const [deckNames, setDeckNames] = useState(() => {
//   const savedDeckNames = localStorage.getItem('deckNames');
//     return savedDeckNames ? JSON.parse(savedDeckNames) : [];
//   });
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (deckName && !deckNames.includes(deckName)) {
//       const newDeckNames = [...deckNames, deckName];
//       setDeckNames(newDeckNames);
//       localStorage.setItem('deckNames', JSON.stringify(newDeckNames));
//     }
//   }, [deckName, deckNames]);

//   const handleButtonClick = async (buttonName) => {
//     try {
//       const response = await fetch('/api/selectCategory', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ category: buttonName }),
//       });

//       if (response.ok) {
//         setCategory(buttonName); // Set the category in the parent state
//         navigate('/activePlay');
//       } else {
//         console.error('Failed to send category to backend');
//       }
//     } catch (error) {
//       console.error('Error sending category to backend:', error);
//     }
//   };

//   return (
//     <main className="flex-grow-1 w-100">
//       <div className="player-status text-center">
//         <span className="player-name">{userName} </span>
//         <span className="playing-text text-dark">is playing!</span>
//         <div className="button-grid">
//           {deckNames.map((buttonName) => (
//             <button 
//               key={buttonName}
//               className="grid-button" 
//               onClick={() => handleButtonClick(buttonName)}
//             >
//               {buttonName}
//             </button>
//           ))}
//           <NavLink className='nav-link' to='/newDeck'>
//             <button className="grid-button">+</button>
//           </NavLink> 
//         </div>
//       </div>
//     </main>
//   );
// }