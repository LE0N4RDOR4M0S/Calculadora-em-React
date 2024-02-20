// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function Calculator() {
  const [currentNumber, setCurrentNumber] = useState('');
  const [operator, setOperator] = useState(null);

  const appendNumber = (number) => {
    setCurrentNumber((prevNumber) => prevNumber + number);
  };

  const setOperatorHandler = (op) => {
    if (operator !== null || currentNumber === '') return;
    setOperator(op);
    setCurrentNumber((prevNumber) => prevNumber + ' ' + op + ' ');
  };

  const calculateResult = () => {
    if (operator === null || currentNumber.slice(-2) === ' ') return;
    try {
      const result = eval(currentNumber);
      setCurrentNumber('' + result);
      setOperator(null);
    } catch (error) {
      alert('Invalid input');
      clearDisplay();
    }
  };

  const clearDisplay = () => {
    setCurrentNumber('');
    setOperator(null);
  };

  const appendDecimal = () => {
    if (currentNumber.includes('.')) return;
    setCurrentNumber((prevNumber) => prevNumber + '.');
  };

  return (
    <div className="calculator">
      <input type="text" value={currentNumber} readOnly />
      <div onClick={() => appendNumber('7')}>7</div>
      <div onClick={() => appendNumber('8')}>8</div>
      <div onClick={() => appendNumber('9')}>9</div>
      <div onClick={() => setOperatorHandler('/')}>/</div>

      <div onClick={() => appendNumber('4')}>4</div>
      <div onClick={() => appendNumber('5')}>5</div>
      <div onClick={() => appendNumber('6')}>6</div>
      <div onClick={() => setOperatorHandler('*')}>*</div>

      <div onClick={() => appendNumber('1')}>1</div>
      <div onClick={() => appendNumber('2')}>2</div>
      <div onClick={() => appendNumber('3')}>3</div>
      <div onClick={() => setOperatorHandler('-')}>-</div>

      <div onClick={() => appendNumber('0')}>0</div>
      <div onClick={clearDisplay}>C</div>
      <div onClick={calculateResult}>=</div>
      <div onClick={() => setOperatorHandler('+')}>+</div>

      <div onClick={appendDecimal}>.</div>
    </div>
  );
}

export default Calculator;
