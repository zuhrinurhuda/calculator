import styled from 'styled-components';

export const KeypadContainer = styled.div`
  button {
    color: #e6e7e7;
    font-size: 2em;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    border-top: 1px solid #313339;
    border-right: 1px solid #313339;
  }

  button:active {
    box-shadow: inset 0 0 80px 0 rgba(0, 0, 0, 0.25);
  }
`;

export const KeypadWrapper = styled.div`
  display: flex;
`;

export const FunctionKeys = styled.div`
  button {
    width: 160px;
    background: #3b3d40;
  }
`;

export const DigitKeys = styled.div`
  width: 240px;
  display: flex;
  flex-wrap: wrap-reverse;

  button {
    background: #5b5d60;
  }

  #zero {
    width: 160px;
  }
`;

export const OperatorKeys = styled.div`
  width: 80px;

  button {
    background:  #1e89da;
  }
`;