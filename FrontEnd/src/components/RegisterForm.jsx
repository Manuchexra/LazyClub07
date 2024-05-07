import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        age: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/register/', formData); // URL for Django register endpoint
            alert('Registration successful!');
        } catch (error) {
            alert('Registration failed.');
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Register Form</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input type="text" name="fname" value={formData.fname} onChange={handleChange} required /><br />

                <label>Last Name:</label>
                <input type="text" name="lname" value={formData.lname} onChange={handleChange} required /><br />

                <label>Age:</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} required /><br />

                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required /><br />

                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required /><br />

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;