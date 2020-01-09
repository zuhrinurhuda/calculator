import styled from 'styled-components';

export const KeypadContainer = styled.div`
  width: 320px;
  height: 520px;

  #prime,
  #fibonacci,
  #zero {
    width: 160px;
  }

  button {
    width: 80px;
    height: 80px;
    background: none;
    border: none;
    padding: 0;
    user-select: none;
    outline: none;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  button:active {
    box-shadow: inset 0 0 80px 0 rgba(0, 0, 0, 0.25);
  }
`;

export const FunctionKeys = styled.div``;

export const DigitKeys = styled.div`
  width: 240px;
  display: flex;
  flex-wrap: wrap-reverse;
`;

export const OperatorKeys = styled.div`
  width: 80px;
`;