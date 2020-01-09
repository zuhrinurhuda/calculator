import React, { useState } from 'react';

import { functionKeys, digitKeys, operatorKeys } from 'utils/constants';
import calculatorOperations from 'utils/calculatorOperations';
import primeNumbers from 'utils/primeNumbers';

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

  /**
   * Determine keypad action
   * @param {number | string} key -  Key from constants
   */
  const determineAction = key => {
    if (/\d/.test(key)) {
      return inputDigit(key)
    } else if (/\W/.test(key) || key === 'x') {
      return performOperation(key)
    } else {
      return runFunctions(key)
    }
  }

  /**
   * Looping button as many keys for create calculator keypad
   * @param {Object} data - Object of keys
   */
  const generateKeypad = data => {
    return Object.keys(data).map(key => (
      <button
        key={key}
        id={`key-${key.toLowerCase()}`}
        className="key-pad"
        onClick={determineAction(data[key])}
      >
        {data[key]}
      </button>
    ))
  }

  return (
    <div style={{
      width: 320,
      height: 520,
    }}>
      <div>{displayValue}</div>
      <div>
        {generateKeypad(functionKeys)}
      </div>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            width: 240,
            display: 'flex',
            flexWrap: 'wrap-reverse',
          }}
        >
          {generateKeypad(digitKeys)}
        </div>
        <div style={{ width: 80 }}>
          {generateKeypad(operatorKeys)}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
