import { useState } from 'react';
import styled from 'styled-components';

import Card from './Card';
import Button from './Button';
import ErrorModal from './ErrorModal';

const FormControl = styled.div`
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;

  & label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;
  }

  & input:focus {
    outline: none;
    border-color: #4f005f;
  }
`;

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    // `trim` removes white space
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'invalid input',
        message: 'please enter a valid name and age (non-empty values)',
      });
      return; // doesn't execute
    }
    // `+` makes it a number
    if (+enteredAge < 1) {
      setError({
        title: 'invalid input',
        message: 'please enter a valid age (> 0)',
      });
      return; // doesn't execute
    }
    props.onAddUser(enteredUsername, enteredAge); // forwarding data to `App` `addUseHandler`
    setEnteredUsername(''); // resetting 
    setEnteredAge(''); // resetting 
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value); // fetches the `value` from the `target` of the input
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value); // fetches the `value` from the `target` of the input
  };
  const errorHandler = () => {
    setError(null); // resetting (falsey)
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
      <Card>
        <FormControl onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            id='age'
            type='number'
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type='submit'>Add User</Button>
        </FormControl>
      </Card>
    </div>
  );
};

export default AddUser;
