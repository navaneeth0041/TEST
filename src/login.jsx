import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('Login Successful');
            setEmail('');
            setPassword('');
            window.location.href = '/1.html'; 
        } catch (err) {
            console.error(err);
            console.log('Error');
            setEmail('');
            setPassword('');
        }
    };

    return (
        <div className='signup-container'>
            <form className='signup-form' onSubmit={handleSubmit}>
                <h2>LogIn</h2>
                <label htmlFor='email'>
                    Email:
                    <input
                        type='email'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label htmlFor='password'>
                    Password:
                    <input
                        type='password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type='submit'>LogIn</button>
                <p>Not a member yet? <Link to='/signup'>Sign Up</Link></p>
            </form>
        </div>
    );
};

export default Login;
