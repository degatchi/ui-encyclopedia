import { useState, useRef } from 'react';
import styled from 'styled-components';

import Card from './Card';
import Button from './Button';
import ErrorModal from './ErrorModal';
import Wrapper from './Wrapper'

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
  const nameInputRef = useRef();
  const ageInputRef = useRef();


  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    // `trim` removes white space
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'invalid input',
        message: 'please enter a valid name and age (non-empty values)',
      });
      return; // doesn't execute
    }
    // `+` makes it a number
    if (+enteredUserAge < 1) {
      setError({
        title: 'invalid input',
        message: 'please enter a valid age (> 0)',
      });
      return; // doesn't execute
    }
    props.onAddUser(enteredName, enteredUserAge); // forwarding data to `App` `addUseHandler`
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null); // resetting (falsey)
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
      <Card>
        <FormControl onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            ref={nameInputRef}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            id='age'
            type='number'
            ref={ageInputRef}
          />
          <Button type='submit'>Add User</Button>
        </FormControl>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
