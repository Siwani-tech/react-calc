import React, { useState } from 'react';
import './calculatorstyle.css';
import { useDispatch, useSelector } from 'react-redux';
import { calcinput, resetcalc ,resultcalc} from '../features/calcSlice';

export default function CalculatorUi() {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.calculator.input);
  const result=useSelector((state)=>state.calculator.result);
  console.log(result)

  // Local state for result and error
  // const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleButtonClick = (value) => {
    if (error) {
     
      dispatch(resetcalc());
      setError(null);
    } else {
      dispatch(calcinput(value));
    }
  };

  const handleClear = () => {
    setError(null);
    dispatch(resetcalc());
  };
  const handleEvaluate = () => {
    try {
      const newResult = eval(input);
      if (isFinite(newResult)) {
        
        dispatch(resultcalc(newResult));
        
        dispatch(calcinput(newResult.toString()));
      } else {
        setError('Math Error');
        
        dispatch(resetcalc());
      }
    } catch (err) {
      setError('Math Error');
      dispatch(resetcalc());
    }
  };
  
  return (
    <>
      <div className="calculator-container">
        <input className="calculator-input" type="text"  value={error || result || input} readOnly  />
        <div className="calculator-buttons">
          <div className="button-row">
            {[7, 8, 9, '/'].map((digit) => (
              <button key={digit} onClick={() => handleButtonClick(digit.toString())}>
                {digit}
              </button>
            ))}
          </div>
          <div className="button-row">
            {[4, 5, 6, '*'].map((digit) => (
              <button key={digit} onClick={() => handleButtonClick(digit.toString())}>
                {digit}
              </button>
            ))}
          </div>
          <div className="button-row">
            {[1, 2, 3, '-'].map((digit) => (
              <button key={digit} onClick={() => handleButtonClick(digit.toString())}>
                {digit}
              </button>
            ))}
          </div>
          <div className="button-row">
            {[0, '.', '+'].map((digit) => (
              <button key={digit} onClick={() => handleButtonClick(digit.toString())}>
                {digit}
              </button>
            ))}
            <button onClick={handleEvaluate}>=</button>
          </div>
          <div className="button-row">
            <button onClick={handleClear}>C</button>
          </div>
        </div>
      </div>
    </>
  );
}
