import React from 'react';
import PropTypes from 'prop-types';

import { functionKeys, digitKeys, operatorKeys } from 'utils/constants';
import {
  KeypadContainer,
  FunctionKeys,
  DigitKeys,
  OperatorKeys
} from './styles';

const Keypad = props => {
  const {
    inputDigit,
    performOperation,
    runFunctions,
  } = props;

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
        id={key.toLowerCase()}
        onClick={determineAction(data[key])}
      >
        {data[key]}
      </button>
    ))
  }

  return (
    <KeypadContainer>
      <FunctionKeys>
        {generateKeypad(functionKeys)}
      </FunctionKeys>
      <div style={{ display: 'flex' }}>
        <DigitKeys>
          {generateKeypad(digitKeys)}
        </DigitKeys>
        <OperatorKeys>
          {generateKeypad(operatorKeys)}
        </OperatorKeys>
      </div>
    </KeypadContainer>
  )
};

Keypad.propTypes = {
  inputDigit: PropTypes.func.isRequired,
  performOperation: PropTypes.func.isRequired,
  runFunctions: PropTypes.func.isRequired,
}

export default Keypad;
