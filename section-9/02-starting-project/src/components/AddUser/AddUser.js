import { React, useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [userInput, setUserInput] = useState({
    username: '',
    age: '',
  });
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userInput.username.trim() === 0 || userInput.age.trim() === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid username or age (non-empty values).',
      });
      return;
    }
    if (+userInput.age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(userInput);

    setUserInput({
      username: '',
      age: '',
    });
  };

  const inputChangeHandler = (input, event) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: event.target.value,
      };
    });
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
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
            value={userInput.username}
            onChange={(event) => inputChangeHandler('username', event)}
            id="username"
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            value={userInput.age}
            onChange={(event) => inputChangeHandler('age', event)}
            id="age"
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
