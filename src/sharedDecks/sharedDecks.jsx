// // import React from 'react';
// // import './sharedDecks.css';
// // import { BrowserRouter, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
// // import { Button } from 'react-bootstrap';

// // export function SharedDecks({ userName, setCategory }) {
// //   const navigate = useNavigate();

// //   const handleButtonClick = async (buttonName) => {
// //     try {
// //       const response = await fetch('/api/selectCategory', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ category: buttonName }),
// //       });

// //       if (response.ok) {
// //         setCategory(buttonName); // Set the category in the parent state
// //         navigate('/activePlay');
// //       } else {
// //         console.error('Failed to send category to backend');
// //       }
// //     } catch (error) {
// //       console.error('Error sending category to backend:', error);
// //     }
// //   };


// //   return (
// //     <main className="flex-grow-1 w-100">
// //       <div className="player-status text-center">
// //         <span className="player-name">{userName} </span>
// //         <span className="playing-text text-dark">is playing!</span>
// //         <div className="button-grid">
// //           {[
// //             "The Office: example",
// //             "Name1: Creator",
// //             "Name2: Creator",
// //             "Name3: Creator",
// //           ].map((buttonName) => (
// //             <button 
// //               key={buttonName}
// //               className="grid-button" 
// //               onClick={() => handleButtonClick(buttonName)}
// //             >
// //               {buttonName}
// //             </button>
// //           ))}
// //         </div>
// //       </div>
// //     </main>
// //   );
// // }

import React, { useEffect, useState } from 'react';
import './sharedDecks.css';
import { useNavigate } from 'react-router-dom';

export function SharedDecks({ userName, setCategory }) {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [inputMessage, setInputMessage] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    const socketURL = `${protocol}://${window.location.host}/ws`;
    const otherSocketURL = `${protocol}://${window.location.hostname}:${window.location.port}/ws`;
    const newSocket = new WebSocket(socketURL);
    console.log('WebSocket URL:', socketURL);
    console.log('Other WebSocket URL:', otherSocketURL);

    newSocket.onopen = () => {
      console.log('WebSocket connected');
      setIsConnected(true);
      appendMessage('system', 'Connected to the chat');
    };

    newSocket.onclose = () => {
      console.log('WebSocket disconnected');
      setIsConnected(false);
      appendMessage('system', 'Disconnected from the chat');
    };

    newSocket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    newSocket.onmessage = async (event) => {
      console.log('WebSocket message:', event);
      const text = await event.data.text();
      const chat = JSON.parse(text);
      appendMessage(chat.name, chat.msg);
    };

    setSocket(newSocket);

    return () => {
      if (newSocket.readyState === WebSocket.OPEN || newSocket.readyState === WebSocket.CONNECTING) {
        newSocket.close();
        console.log('WebSocket closed');
      }
    };
  }, []);

  const sendMessage = () => {
    if (socket && socket.readyState === WebSocket.OPEN && inputMessage) {
      const messageData = { name: userName, msg: inputMessage };
      socket.send(JSON.stringify(messageData));
      //appendMessage('me', inputMessage);
      setInputMessage('');
    } else {
      console.log('WebSocket is not open. Unable to send message.');
    }
  };

  const appendMessage = (from, msg) => {
    const timestamp = new Date().toLocaleTimeString();
    setMessages(prev => [...prev, { from, msg, timestamp }]);
  };

  return (
    <main className="flex-grow-1 w-100">
      <div className="player-status text-center">
        <span className="player-name">{userName} </span>
        <span className="playing-text text-dark">is playing!</span>
      </div>
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.from === 'me' ? 'sent' : 'received'}`}>
              <span className="sender">{msg.from}: </span>
              <span className="content text-dark">{msg.msg}</span>
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            disabled={!isConnected}
            placeholder="Type your message..."
          />
          <button 
            onClick={sendMessage} 
            className="btn btn-primary"
            disabled={!isConnected || !inputMessage}
          >
            Send
          </button>
        </div>
      </div>
      {!isConnected && <p className="text-primary">Connecting...</p>}
    </main>
  );
}

// import React, { useEffect, useState } from 'react';
// import './sharedDecks.css';
// import { useNavigate } from 'react-router-dom';

// export function SharedDecks({ userName, setCategory }) {
//   const navigate = useNavigate();
//   const [messages, setMessages] = useState([]);
//   const [socket, setSocket] = useState(null);
//   const [inputMessage, setInputMessage] = useState('');
//   const [isConnected, setIsConnected] = useState(false);

//   useEffect(() => {
//     const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
//     const socketURL = `${protocol}://${window.location.host}/ws`;
//     const newSocket = new WebSocket(socketURL);
//     console.log('WebSocket URL:', socketURL);

//     newSocket.onopen = () => {
//       console.log('WebSocket connected');
//       setIsConnected(true);
//       appendMessage('system', 'Connected to the chat');
//     };

//     newSocket.onclose = () => {
//       console.log('WebSocket disconnected');
//       setIsConnected(false);
//       appendMessage('system', 'Disconnected from the chat');
//     };

//     newSocket.onerror = (error) => {
//       console.error('WebSocket error:', error);
//     };

//     newSocket.onmessage = async (event) => {
//       const text = await event.data.text();
//       const chat = JSON.parse(text);
//       appendMessage(chat.name, chat.msg);
//     };

//     setSocket(newSocket);

//     return () => {
//       if (newSocket.readyState === WebSocket.OPEN || newSocket.readyState === WebSocket.CONNECTING) {
//         newSocket.close();
//         console.log('WebSocket closed');
//       }
//     };
//   }, []);

//   const sendMessage = () => {
//     if (socket && socket.readyState === WebSocket.OPEN && inputMessage) {
//       const messageData = { name: userName, msg: inputMessage };
//       socket.send(JSON.stringify(messageData));
//       appendMessage('me', inputMessage); // Append the message as "me"
//       setInputMessage(''); // Clear input after sending
//     } else {
//       console.log('WebSocket is not open. Unable to send message.');
//     }
//   };

//   const appendMessage = (from, msg) => {
//     const timestamp = new Date().toLocaleTimeString();
//     // Append the message regardless of the sender
//     setMessages(prev => [...prev, { from, msg, timestamp }]);
//   };

//   return (
//     <main className="flex-grow-1 w-100">
//       <div className="player-status text-center">
//         <span className="player-name">{userName} </span>
//         <span className="playing-text text-dark">is playing!</span>
//       </div>
//       <div className="chat-container">
//         <div className="chat-messages">
//           {messages.map((msg, index) => (
//             <div key={index} className={`message ${msg.from === 'me' ? 'sent' : 'received'}`}>
//               <span className="sender">{msg.from === 'me' ? 'me' : msg.from}: </span>
//               <span className="content text-dark">{msg.msg}</span>
//             </div>
//           ))}
//         </div>
//         <div className="chat-input">
//           <input
//             type="text"
//             value={inputMessage}
//             onChange={(e) => setInputMessage(e.target.value)}
//             onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
//             disabled={!isConnected}
//             placeholder="Type your message..."
//           />
//           <button 
//             onClick={sendMessage} 
//             className="btn btn-primary"
//             disabled={!isConnected || !inputMessage}
//           >
//             Send
//           </button>
//         </div>
//       </div>
//       {!isConnected && <p className="text-primary">Connecting...</p>}
//     </main>
//   );
// }