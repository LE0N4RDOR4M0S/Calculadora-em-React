// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './App.css';

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
    <div>
      <div className="calculator">
        <input type="text" value={currentNumber} readOnly />
        <div className='number' onClick={() => appendNumber('7')}>7</div>
        <div className='number' onClick={() => appendNumber('8')}>8</div>
        <div className='number' onClick={() => appendNumber('9')}>9</div>
        <div className='C' onClick={clearDisplay}>C</div>
        <div className='number' onClick={() => appendNumber('4')}>4</div>
        <div className='number' onClick={() => appendNumber('5')}>5</div>
        <div className='number' onClick={() => appendNumber('6')}>6</div>
        <div className='operator' onClick={() => setOperatorHandler('/')}>/</div>
        <div className='number' onClick={() => appendNumber('1')}>1</div>
        <div className='number' onClick={() => appendNumber('2')}>2</div>
        <div className='number' onClick={() => appendNumber('3')}>3</div>
        <div className='operator' onClick={() => setOperatorHandler('*')}>x</div>
        <div className='number' onClick={() => appendNumber('0')}>0</div>
        <div className='number' onClick={appendDecimal}>.</div>
        <div className='operator' onClick={() => setOperatorHandler('-')}>-</div>
        <div className='operator' onClick={() => setOperatorHandler('+')}>+</div>
        <div className='equals' onClick={calculateResult}>=</div>
      </div>
      <div className='rodape'>
        <p>Criado, desenvolvido e implementado por Leonardo de Oliveira Ramos.</p>
        <p>E-mail: leoolivramos@gmail.com</p>
        <p>Linkedin: https://www.linkedin.com/in/leonardo-de-oliveira-ramos-690318270/</p>
      </div>
    </div>
  );
}

export default Calculator;
