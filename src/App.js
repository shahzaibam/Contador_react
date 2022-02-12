import React, { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count+1)}>
        Click here
      </button>

      <button onClick={() => setCount(count-1)}>
        Don't click here
      </button>

      <button onClick={() => setCount(count*0)}>
        Erase
      </button>
    </div>
  );
}

export default App;
