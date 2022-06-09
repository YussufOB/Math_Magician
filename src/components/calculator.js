import React, { Component } from 'react';
import calculate from './logic/calculate';
import './calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,

    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btn) {
    const btnValue = btn.target.textContent;
    this.setState((e) => calculate(e, btnValue));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container">
        <div className="display_board">
          { total }
          { operation }
          { next }
        </div>
        <button type="button" onClick={this.handleClick} className="btn">AC</button>
        <button type="button" onClick={this.handleClick} className="btn">+/-</button>
        <button type="button" onClick={this.handleClick} className="btn">%</button>
        <button type="button" onClick={this.handleClick} className="btn operator">÷</button>
        <button type="button" onClick={this.handleClick} className="btn">7</button>
        <button type="button" onClick={this.handleClick} className="btn">8</button>
        <button type="button" onClick={this.handleClick} className="btn">9</button>
        <button type="button" onClick={this.handleClick} className="btn operator">x</button>
        <button type="button" onClick={this.handleClick} className="btn">4</button>
        <button type="button" onClick={this.handleClick} className="btn">5</button>
        <button type="button" onClick={this.handleClick} className="btn">6</button>
        <button type="button" onClick={this.handleClick} className="btn operator">-</button>
        <button type="button" onClick={this.handleClick} className="btn">1</button>
        <button type="button" onClick={this.handleClick} className="btn">2</button>
        <button type="button" onClick={this.handleClick} className="btn">3</button>
        <button type="button" onClick={this.handleClick} className="btn operator">+</button>
        <button type="button" onClick={this.handleClick} className="btn zero">0</button>
        <button type="button" onClick={this.handleClick} className="btn">.</button>
        <button type="button" onClick={this.handleClick} className="btn operator">=</button>
      </div>
    );
  }
}

export default Calculator;
