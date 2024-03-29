import { React, useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

import styles from './AddUser.module.css';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [userInput, setUserInput] = useState({
  //   username: '',
  //   age: '',
  // });
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim() === 0 || enteredAge.trim() === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid username or age (non-empty values).',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    //props.onAddUser(userInput);
    props.onAddUser({username: enteredName, age: enteredAge});
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';

    // setUserInput({
    //   username: '',
    //   age: '',
    // });
  };

  // const inputChangeHandler = (input, event) => {
    // setUserInput((prevInput) => {
    //   return {
    //     ...prevInput,
    //     [input]: event.target.value,
    //   };
    // });
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            // value={userInput.username}
            // onChange={(event) => inputChangeHandler('username', event)}
            id="username"
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            // value={userInput.age}
            // onChange={(event) => inputChangeHandler('age', event)}
            id="age"
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
