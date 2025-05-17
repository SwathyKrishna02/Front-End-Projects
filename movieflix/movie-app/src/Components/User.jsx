import React, { useState } from 'react';

function User() {
  const usersData = [
    { email: 'swathy@gmail.com', password: '123', plan: 'Standard' },
    { email: 'krishna@gmail.com', password: '256', plan: 'Premium' },
  ];

  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState('');

  const handleUserSelection = (username) => {
    const user = usersData.find((user) => user.username === username);
    if (user) {
      setSelectedUser(user); 
      setMessage(`Selected user: ${user.username}. Plan: ${user.plan}`);
    } else {
      setMessage('User not found');
    }
  };

  return (
    <div className="container">
      <div className="user-form">
        <h2>User Data Example</h2>

        <div>
          <button onClick={() => handleUserSelection('Swathy')}>Select Swathy</button>
          <button onClick={() => handleUserSelection('Krishna')}>Select Krishna</button>
        </div>

        <div className="mt-3">
          <strong>{message}</strong>
        </div>

        <div className="mt-3">
          {selectedUser && (
            <div>
              <h3>User Details:</h3>
              <p>Username: {selectedUser.username}</p>
              <p>Password: {selectedUser.password}</p>
              <p>Subscription Plan: {selectedUser.plan}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default User;
