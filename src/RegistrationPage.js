import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationPage.css';

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: ''
    });

    const generatePassword = () => {
        const phoneLast6 = formData.phone.slice(-6);
        return phoneLast6 || Math.random().toString(36).slice(-6);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const password = generatePassword();
        axios.post('/api/register', { ...formData, password })
            .then(response => {
                console.log('User registered successfully:', response.data);
            })
            .catch(error => {
                console.error('There was an error registering the user!', error);
            });
    };

    return (
        <div className="registration-page">
            <h1>Register for Peep Bus Ticketing</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Phone:
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <label>
                    Password:
                    <input type="text" name="password" value={generatePassword()} readOnly />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationPage;