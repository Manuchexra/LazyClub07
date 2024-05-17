import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { BiUser } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { register, reset } from './authService/authSlice.jsx';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Spinner.jsx';
import './style.css';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        re_password: '',
    });

    const { first_name, last_name, email, password, re_password } = formData;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== re_password) {
            toast.error('Passwords do not match');
        } else {
            const userData = {
                first_name,
                last_name,
                email,
                password,
                re_password,
            };
            toast.userData(userData)
            dispatch(register(userData));
        }
    };

    useEffect(() => {
        if (isError) {
            toast.error(message);
            dispatch(reset());
        }

        if (isSuccess) {
            navigate('/');
            toast.success('An activation email has been sent to your email. Please check your email');
            dispatch(reset());
        }
    }, [isError, isSuccess, message, navigate, dispatch]); // Added message to dependency array

    return (
        <div className="container auth__container">
            <h1 className="main__title">Register <BiUser /></h1>

            {isLoading && <Spinner />}

            <form className="auth__form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        name="first_name"
                        onChange={handleChange}
                        value={first_name}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        name="last_name"
                        onChange={handleChange}
                        value={last_name}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={password}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Retype Password"
                        name="re_password"
                        onChange={handleChange}
                        value={re_password}
                        required
                    />
                </div>

                <button className="btn btn-primary btn-block" type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;
