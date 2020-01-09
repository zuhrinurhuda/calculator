import React, { useState } from 'react';

import { Keypad, Display } from 'components';
import calculatorOperations from 'utils/calculatorOperations';
import primeNumbers from 'utils/primeNumbers';
import fibonacciNumbers from 'utils/fibonacciNumbers';

import CalculatorContainer from './styles';

const Calculator = () => {
  const [value, setValue] = useState(null);
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  // Clear all state and set displayValue to 0
  const clearAll = () => {
    setValue(null);
    setDisplayValue('0');
    setOperator(null);
    setWaitingForOperand(false);
  }

  /**
   * Delete last digit at displayValue
   * if displayValue length is 1 then
   * set displayValue to 0
   */
  const deleteLastDigit = () => {
    const newValue = displayValue.substring(0, displayValue.length - 1) || '0';
    setDisplayValue(newValue);
  }
  
  /**
   * Add digit to displayValue
   * @param {number} digit - Digit value from keypad 
   */
  const inputDigit = digit => () => {
    if (waitingForOperand) {
      setDisplayValue(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplayValue(
        displayValue === '0'
          ? String(digit)
          : displayValue + digit
      );
    }
  }

  /**
   * Calculate operation
   * @param {string} nextOperator - Operator type from keypad
   */
  const performOperation = nextOperator => () => {
    const inputValue = parseInt(displayValue);

    if (value === null) {
      setValue(inputValue);
    } else if (operator) {
      const currentValue = value || 0;
      const newValue = calculatorOperations[operator](currentValue, inputValue)

      setValue(newValue);
      setDisplayValue(String(newValue));
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  }

  // Calculator function options
  const calculatorFunctions = {
    prime: value => primeNumbers(value),
    fibonacci: value => fibonacciNumbers(value),
    ac: () => clearAll(),
    del: () => deleteLastDigit(),
  }

  /**
   * Invoke calculator function
   * @param {string} key - Function key from keypad
   */
  const runFunctions = key => () => {
    setDisplayValue(calculatorFunctions[key.toLowerCase()]);
  }

  return (
    <CalculatorContainer>
      <Display displayValue={displayValue} />
      <Keypad
        inputDigit={inputDigit}
        performOperation={performOperation}
        runFunctions={runFunctions}
      />
    </CalculatorContainer>
  );
};

export default Calculator;
