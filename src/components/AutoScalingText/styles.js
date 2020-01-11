import styled from 'styled-components';

const ScalingContainer = styled.div`
  display: inline-block;
  padding: 0 30px;
  position: absolute;
  right: 0;
  transform: ${({ scale }) => `scale(${scale}, ${scale})`};
  transform-origin: right;
`;

export default ScalingContainer;