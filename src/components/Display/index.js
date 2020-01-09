import React from 'react';
import PropTypes from 'prop-types';

import AutoScalingText from '../AutoScalingText';
import { DisplayContainer } from './styles';

const Display = props => {
  const { displayValue } = props;

  return (
    <DisplayContainer>
      <AutoScalingText>
        {displayValue}
      </AutoScalingText>
    </DisplayContainer>
  )
};

Display.propTypes = {
  displayValue: PropTypes.string.isRequired,
};

export default Display;
