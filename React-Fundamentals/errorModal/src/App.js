import React, { useState, Fragment } from 'react';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    // function gets previous snapshot
    setUsersList((prevUsersList) => {
      // `...prevUsersList` uses what was previously there and adds to this new array
      return [
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
