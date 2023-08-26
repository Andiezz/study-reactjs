import { React, useState } from 'react';

import AddUser from './components/AddUser/AddUser';
import UserList from './components/UsersList/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (userInput) => {
    userInput.id = Math.random().toString();
    setUsers((prevUsers) => {
      return [...prevUsers, userInput];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
