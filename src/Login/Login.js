import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {

    const handleSubmit = (event) => {
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>New to Ema-john? <Link to='/signup'>Create a New Account</Link></p>
        </div>
    );
};

export default Login;