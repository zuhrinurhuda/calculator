import React from 'react';

import { functionKeys, digitKeys, operatorKeys } from 'utils/constants';

const Calculator = () => {
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
