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
    const btnValue = btn.target.value;
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
        <button type="button" onClick={this.handleClick} className="btn" value="AC">AC</button>
        <button type="button" onClick={this.handleClick} className="btn" value="+/-">+/-</button>
        <button type="button" onClick={this.handleClick} className="btn" value="%">%</button>
        <button type="button" onClick={this.handleClick} className="btn operator" value="÷">÷</button>
        <button type="button" onClick={this.handleClick} className="btn" value="7">7</button>
        <button type="button" onClick={this.handleClick} className="btn" value="8">8</button>
        <button type="button" onClick={this.handleClick} className="btn" value="9">9</button>
        <button type="button" onClick={this.handleClick} className="btn operator" value="x">x</button>
        <button type="button" onClick={this.handleClick} className="btn" value="4">4</button>
        <button type="button" onClick={this.handleClick} className="btn" value="5">5</button>
        <button type="button" onClick={this.handleClick} className="btn" value="6">6</button>
        <button type="button" onClick={this.handleClick} className="btn operator" value="-">-</button>
        <button type="button" onClick={this.handleClick} className="btn" value="1">1</button>
        <button type="button" onClick={this.handleClick} className="btn" value="2">2</button>
        <button type="button" onClick={this.handleClick} className="btn" value="3">3</button>
        <button type="button" onClick={this.handleClick} className="btn operator" value="+">+</button>
        <button type="button" onClick={this.handleClick} className="btn zero" value="0">0</button>
        <button type="button" onClick={this.handleClick} className="btn" value=".">.</button>
        <button type="button" onClick={this.handleClick} className="btn operator" value="=">=</button>
      </div>
    );
  }
}

export default Calculator;
