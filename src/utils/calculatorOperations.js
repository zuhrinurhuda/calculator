const calculatorOperations = {
  '+': (prevValue, nextValue) => prevValue + nextValue,
  'x': (prevValue, nextValue) => prevValue * nextValue,
  '=': (_, nextValue) => nextValue,
}

export default calculatorOperations;
