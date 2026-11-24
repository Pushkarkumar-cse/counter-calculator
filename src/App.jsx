import React, { useState } from 'react';

function App() {
  // --- Counter State & Functions ---
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  // --- Calculator State & Functions ---
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const calculate = (operator) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Please enter valid numbers");
      return;
    }

    switch (operator) {
      case '+':
        setResult(n1 + n2);
        break;
      case '-':
        setResult(n1 - n2);
        break;
      case '*':
        setResult(n1 * n2);
        break;
      case '/':
        setResult(n2 !== 0 ? (n1 / n2).toFixed(2) : "Cannot divide by zero");
        break;
      default:
        setResult(0);
    }
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', marginTop: '30px' }}>
      
      {/* SECTION 1: COUNTER */}
      <div>
        <h2>React Counter App</h2>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment (+)</button>
        <button onClick={decrement} style={{ margin: '0 10px' }}>Decrement (-)</button>
        <button onClick={reset}>Reset</button>
      </div>

      <hr style={{ margin: '40px auto', width: '50%' }} />

      {/* SECTION 2: CALCULATOR */}
      <div>
        <h2>Two-Number Calculator</h2>
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <br /><br />
        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <br /><br />

        <button onClick={() => calculate('+')}> + </button>
        <button onClick={() => calculate('-')} style={{ margin: '0 8px' }}> - </button>
        <button onClick={() => calculate('*')} style={{ margin: '0 8px' }}> * </button>
        <button onClick={() => calculate('/')}> / </button>

        <h3>Result: {result}</h3>
      </div>

    </div>
  );
}

export default App;