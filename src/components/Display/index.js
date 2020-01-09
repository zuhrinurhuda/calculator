import React from 'react';
import PropTypes from 'prop-types';

import { DisplayContainer } from './styles';

const Display = props => {
  const { displayValue } = props;

  return (
    <DisplayContainer>
      {displayValue}
    </DisplayContainer>
  )
};

Display.propTypes = {
  displayValue: PropTypes.string.isRequired,
};

export default Display;
