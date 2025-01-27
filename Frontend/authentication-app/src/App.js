import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, useNavigate } from 'react-router-dom';
import './App.css';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import HomePage from './HomePage';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div>
        <header className='header'>
          <h1>Eastri</h1>
          <nav>
            {user ? (
              <>
                <span>Welcome, {user.name}</span>
                <LogoutButton setUser={setUser} />
              </>
            ) : (
              <>
                <NavLink to="/signup" className={({ isActive }) => isActive ? 'active' : ''}>
                    <button>Sign Up</button>
                </NavLink>
                <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>
                  <button>Login</button>
                </NavLink>
              </>
            )}
          </nav>
        </header>
        <Routes>
          <Route path="/signup" element={<SignupForm setUser={setUser} />} />
          <Route path="/login" element={<LoginForm setUser={setUser} />} />
          <Route path="/" element={<HomePage user={user} />} />
        </Routes>
      </div>
    </Router>
  );
}

const LogoutButton = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/', { state: {} });
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default App;

