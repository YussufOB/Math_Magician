import React, { useState } from 'react';
import './calculator.css';
import calculate from './logic/calculate';

const Calculator = () => {
  const stateObj = {
    total: 0,
    next: null,
    operation: null,
  };

  const [properties, setProperties] = useState(stateObj);

  const handleClick = (btn) => {
    const btnValue = btn.target.textContent;
    const newProperties = { ...properties };
    setProperties(calculate(newProperties, btnValue));
  };

  return (
    <>
      <div className="container">
        <div className="display_board">
          { properties.total}
          { properties.operation }
          { properties.next }
        </div>
        <button type="button" onClick={handleClick} className="btn">AC</button>
        <button type="button" onClick={handleClick} className="btn">+/-</button>
        <button type="button" onClick={handleClick} className="btn">%</button>
        <button type="button" onClick={handleClick} className="btn operator">÷</button>
        <button type="button" onClick={handleClick} className="btn">7</button>
        <button type="button" onClick={handleClick} className="btn">8</button>
        <button type="button" onClick={handleClick} className="btn">9</button>
        <button type="button" onClick={handleClick} className="btn operator">x</button>
        <button type="button" onClick={handleClick} className="btn">4</button>
        <button type="button" onClick={handleClick} className="btn">5</button>
        <button type="button" onClick={handleClick} className="btn">6</button>
        <button type="button" onClick={handleClick} className="btn operator">-</button>
        <button type="button" onClick={handleClick} className="btn">1</button>
        <button type="button" onClick={handleClick} className="btn">2</button>
        <button type="button" onClick={handleClick} className="btn">3</button>
        <button type="button" onClick={handleClick} className="btn operator">+</button>
        <button type="button" onClick={handleClick} className="btn zero">0</button>
        <button type="button" onClick={handleClick} className="btn">.</button>
        <button type="button" onClick={handleClick} className="btn operator">=</button>
      </div>
    </>
  );
};

export default Calculator;
