import React, { useState, useEffect, useRef } from 'react';

import ScalingContainer from './styles';

const AutoScalingText = props => {
  const { children } = props;
  const [scale, setScale] = useState(1);
  const refNode = useRef(null);
  
  useEffect(() => {
    const node = refNode.current;
    const parentNode = node.parentNode;
    const availableWidth = parentNode.offsetWidth;
    const actualWidth = node.offsetWidth;
    const actualScale = availableWidth / actualWidth;

    if (scale === actualScale) {
      return
    }

    if (actualScale < 1) {
      setScale(actualScale);
    } else if (scale < 1) {
      setScale(1);
    }
  })

  return (
    <ScalingContainer
      ref={refNode}
      scale={scale}
    >
      {children}
    </ScalingContainer>
  )
};

export default AutoScalingText;
