import { React, useState } from 'react';

import styles from './Form.module.css'

const Form = (props) => {
  // const [userInput, setUserInput] = useState({
  //   'current-saving': 10000,
  //   'yearly-contribution': 1200,
  //   'expected-return': 7,
  //   duration: 10
  // });

  const [currentSavings, setCurrentSavings] = useState('');
  const [yearlyContribution, setYearlyContribution] = useState('');
  const [expectedReturn, setExpectedReturn] = useState('');
  const [duration, setDuration] = useState('');

  const dataInputChangeHandler = (event) => {
    if (event.target.id === 'current-savings') {
      setCurrentSavings(event.target.value);
    } else if (event.target.id === 'yearly-contribution') {
      setYearlyContribution(event.target.value);
    } else if (event.target.id === 'expected-return') {
      setExpectedReturn(event.target.value);
    } else if (event.target.id === 'duration') {
      setDuration(event.target.value);
    }
  };

  // const inputChangeHandler = (input, value) => {
  //   setUserInput((prevInput) -> {
  //     return {
  //       ...prevInput,
  //       [input]: value
  //     }
  //   })
  // }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const userInput = {};
    userInput['current-savings'] = +currentSavings;
    userInput['yearly-contribution'] = +yearlyContribution;
    userInput['expected-return'] = +expectedReturn;
    userInput['duration'] = +duration;

    props.onCalculate(userInput);
  }

  const resetHandler = () => {
    setCurrentSavings('');
    setYearlyContribution('');
    setExpectedReturn('');
    setDuration('');
  }

  return (
    <div>
      <form onSubmit={formSubmitHandler} className={styles.form}>
        <div className={styles['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" value={currentSavings} onChange={dataInputChangeHandler} id="current-savings" />
          </p>
          {/* <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" onChange={(event) => inputChangeHandler('current-savings', event.target.value)} id="current-savings" />
          </p> */}
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" value={yearlyContribution} onChange={dataInputChangeHandler} id="yearly-contribution" />
          </p>
        </div>
        <div className={styles['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" value={expectedReturn} onChange={dataInputChangeHandler} id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" value={duration} onChange={dataInputChangeHandler} id="duration" />
          </p>
        </div>
        <p className={styles.actions}>
          <button type="reset" onClick={resetHandler} className={styles.buttonAlt}>
            Reset
          </button>
          <button type="submit" className={styles.button}>
            Calculate
          </button>
        </p>
      </form>
    </div>
  )
}

export default Form;