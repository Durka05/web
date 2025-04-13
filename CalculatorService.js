// src/CalculatorService.js
import React from "react";

const CalculatorService = ({ num1, num2, operation }) => {
  switch (operation) {
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      return num2 !== 0 ? num1 / num2 : "Error";
    default:
      return 0;
  }
};

export default CalculatorService;
