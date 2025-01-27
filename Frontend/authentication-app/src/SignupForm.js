import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import axios from 'axios';

const SignupForm = ({ setUser }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Z]).{8,}$/;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!emailPattern.test(email)) {
            setError('Invalid email format');
            return;
        }

        if (!passwordPattern.test(password)) {
            setError('Password must be 8 characters long and contain at least one uppercase letter');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/signup', { name, email, password });
            console.log(response.data);
            setError('');
            setUser({ name: email });
            navigate('/', { state: { name: email } });
        } catch (error) {
            setError(error.response.data.error);
        }
    };

    return (
        <div className='signupform'>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button className='signupform-btn' type="submit">Sign Up</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
}

export default SignupForm;