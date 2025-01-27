import React from 'react';
import { useLocation } from 'react-router-dom';

const HomePage = ({ user }) => {
  const location = useLocation();
  const name = location.state?.name || user?.name;

  return (
    <div className='home-page'>
      <div className='home-page-content'>
      <h1>Welcome to Eastri App</h1>
      {name && <h2>Hello, {name}!</h2>}
      <p>
        Please use the navigation buttons above to either sign up for a new account or log in to your existing account.
      </p>
      </div>
    </div>
  );
};

export default HomePage;

