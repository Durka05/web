// src/Calculator.js
import React, { Component } from "react";
import CalculatorService from "./CalculatorService";
import "./App.css";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { num1: 0, num2: 0, operation: "add", result: 0 };
  }

  calculate = () => {
    const { num1, num2, operation } = this.state;
    const result = CalculatorService({ num1: Number(num1), num2: Number(num2), operation });
    this.setState({ result });
  };

  render() {
    return (
      <div className="calculator-container">
        <h2>Simple Calculator</h2>
        <input
          type="number"
          value={this.state.num1}
          onChange={(e) => this.setState({ num1: e.target.value })}
        />
        <select onChange={(e) => this.setState({ operation: e.target.value })}>
          <option value="add">+</option>
          <option value="subtract">-</option>
          <option value="multiply">*</option>
          <option value="divide">/</option>
        </select>
        <input
          type="number"
          value={this.state.num2}
          onChange={(e) => this.setState({ num2: e.target.value })}
        />
        <button onClick={this.calculate}>Calculate</button>
        <h3>Result: {this.state.result}</h3>
      </div>
    );
  }
}

export default Calculator;
