import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-box">
      <h1>React Counter</h1>
      {/* If count is 0, it applies the 'zero' class to make it green */}
      <h2 className={count > 0 ? 'pos' : count < 0 ? 'neg' : 'zero'}>{count}</h2>
      <div className="buttons-container">
        <div className="button-row">
          <button onClick={() => setCount(count + 1)}>Increment (+)</button>
          <button onClick={() => setCount(count - 1)}>Decrement (-)</button>
        </div>
        <div className="button-row">
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default App;