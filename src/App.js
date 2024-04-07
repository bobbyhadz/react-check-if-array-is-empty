import './App.css';

import {useEffect, useState} from 'react';

export default function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (messages.length > 0) {
      console.log('array is NOT empty');
    }

    if (messages?.length > 0) {
      console.log('array is NOT empty');
    }

    if (messages.length === 0) {
      console.log('array is empty');
    }
  }, [messages]);

  return (
    <div>
      <h2>Array: {JSON.stringify(messages)}</h2>

      <button
        onClick={() =>
          setMessages(current => [...current, 'hello'])
        }
      >
        Add message
      </button>
    </div>
  );
}
