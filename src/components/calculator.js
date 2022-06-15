import React, { useState } from 'react';
import calculate from './logic/calculate';
import './calculator.css';

const Calculator = () => {
  const stateObj = {
    total: 0,
    next: null,
    operation: null,
  };

  const [properties, setProperties] = useState(stateObj);

  const handleClick = (btn) => {
    const btnValue = btn.target.value;
    const newProperties = { ...properties };
    setProperties(calculate(newProperties, btnValue));
  };

  return (
    <div className="calculator_parent">
      <h1 className="calculator_heading">Let do some Math!</h1>
      <div className="container">
        <div className="display_board">
          {properties.total}
          {properties.operation}
          {properties.next}
        </div>
        <button type="button" onClick={handleClick} className="btn" value="AC">AC</button>
        <button type="button" onClick={handleClick} className="btn" value="+/-">+/-</button>
        <button type="button" onClick={handleClick} className="btn" value="%">%</button>
        <button type="button" onClick={handleClick} className="btn operator" value="÷">÷</button>
        <button type="button" onClick={handleClick} className="btn" value="7">7</button>
        <button type="button" onClick={handleClick} className="btn" value="8">8</button>
        <button type="button" onClick={handleClick} className="btn" value="9">9</button>
        <button type="button" onClick={handleClick} className="btn operator" value="x">x</button>
        <button type="button" onClick={handleClick} className="btn" value="4">4</button>
        <button type="button" onClick={handleClick} className="btn" value="5">5</button>
        <button type="button" onClick={handleClick} className="btn" value="6">6</button>
        <button type="button" onClick={handleClick} className="btn operator" value="-">-</button>
        <button type="button" onClick={handleClick} className="btn" value="1">1</button>
        <button type="button" onClick={handleClick} className="btn" value="2">2</button>
        <button type="button" onClick={handleClick} className="btn" value="3">3</button>
        <button type="button" onClick={handleClick} className="btn operator" value="+">+</button>
        <button type="button" onClick={handleClick} className="btn zero" value="0">0</button>
        <button type="button" onClick={handleClick} className="btn" value=".">.</button>
        <button type="button" onClick={handleClick} className="btn operator" value="=">=</button>
      </div>
    </div>

  );
};

export default Calculator;
