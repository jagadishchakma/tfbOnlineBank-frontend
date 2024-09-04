'use client';
import '@/css/auth_css/registration.css';
import { useState } from "react";
import api from "@/js/api";
import Link from 'next/link';
import logo from '@/images/logo.png';
import Image from 'next/image';
import sign_up_logo from '@/images/signup_logo.png';

const Registration = () => {
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        phone_no: '',
        gender: '',
        account_type: '',
        street_address: '',
        birth_year: '',
        birth_month: '',
        birth_date: '',
        zip_code: '',
        city: '',
        state: '',
        country: '',
        password: '',
        confirm_password: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const validateForm = () => {
        let formIsValid = true;
        let errors = {};

        if (!formData.username) {
            formIsValid = false;
            errors["username"] = "Username is required";
        }

        if (!formData.first_name) {
            formIsValid = false;
            errors["first_name"] = "First name is required";
        }

        if (!formData.last_name) {
            formIsValid = false;
            errors["last_name"] = "Last name is required";
        }

        if (!formData.email) {
            formIsValid = false;
            errors["email"] = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formIsValid = false;
            errors["email"] = "Email is invalid";
        }
        if (!formData.phone_no) {
            formIsValid = false;
            errors["phone_no"] = "Phone number is required";
        }
        if (!formData.gender) {
            formIsValid = false;
            errors["gender"] = "Gender is required";
        }
        if (!formData.account_type) {
            formIsValid = false;
            errors["account_type"] = "Account type is required";
        }
        if (!formData.street_address) {
            formIsValid = false;
            errors["street_address"] = "Street address is required";
        }
        if (!formData.zip_code) {
            formIsValid = false;
            errors["zip_code"] = "Zipcode is required";
        }
        if (!formData.city) {
            formIsValid = false;
            errors["city"] = "City is required";
        }
        if (!formData.state) {
            formIsValid = false;
            errors["state"] = "State is required";
        }
        if (!formData.country) {
            formIsValid = false;
            errors["country"] = "Country is required";
        }
        if (!formData.birth_year) {
            formIsValid = false;
            errors["birth_year"] = "Birth year is required";
        }
        if (!formData.birth_month) {
            formIsValid = false;
            errors["birth_month"] = "Birth month is required";
        }
        if (!formData.birth_date) {
            formIsValid = false;
            errors["birth_date"] = "Birth date is required";
        }

        if (!formData.password) {
            formIsValid = false;
            errors["password"] = "Password is required";
        }

        if (!formData.confirm_password) {
            formIsValid = false;
            errors["confirm_password"] = "Confirm password is required";
        } else if (formData.password !== formData.confirm_password) {
            formIsValid = false;
            errors["confirm_password"] = "Passwords do not match";
        }

        setErrors(errors);
        return formIsValid;
    };
    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();

        if (validateForm()) {

            api.post('accounts/register/', formData)
                .then(response => {
                    setLoading(false);
                    setMessage(response.data);
                    setFormData({
                        username: '',
                        first_name: '',
                        last_name: '',
                        email: '',
                        phone_no: '',
                        gender: '',
                        account_type: '',
                        street_address: '',
                        birth_year: '',
                        birth_month: '',
                        birth_date: '',
                        zip_code: '',
                        city: '',
                        state: '',
                        country: '',
                        password: '',
                        confirm_password: ''
                    })
                })
                .catch(error => {
                    setLoading(false)
                    if (error.response.data.username) {
                        setErrors({ username: error.response.data.username[0] })
                        return
                    }
                    if (error.response.data.error) {
                        setErrors({ email: error.response.data.error })
                        return
                    }
                    setMessage('Registration failed for something went wrong! please try again');
                });
        } else {
            setLoading(false);
        }
    };

    return (
        <div className="registration">
            <div className="row">
                <div className="col-md-6">
                    <div className="registration-logo d-flex" id="registration-logo">
                        <Image src={sign_up_logo} alt="tfb online banking logo" className="mt-5"/>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <Link href="/" className="brand-name">
                        <Image src={logo} alt="logo" width={170} height={50}/>
                    </Link>
                    <div className="registration-form">
                        <form onSubmit={handleSubmit}>
                            <h1>Registration</h1>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" id="username" placeholder="Enter your username" value={formData.username} onChange={handleChange} />
                                {errors.username && <span className="invalid-feedback">{errors.username}</span>}
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="first_name">First Name</label>
                                        <input type="text" name="first_name" id="first_name" placeholder="Enter your first name" value={formData.first_name} onChange={handleChange} />
                                        {errors.first_name && <span className="invalid-feedback">{errors.first_name}</span>}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group ms-3">
                                        <label htmlFor="last_name">Last Name</label>
                                        <input type="text" name="last_name" id="last_name" placeholder="Enter your last name" value={formData.last_name} onChange={handleChange} />
                                        {errors.last_name && <span className="invalid-feedback">{errors.last_name}</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                                {errors.email && <span className="invalid-feedback">{errors.email}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone_no">Phone Number</label>
                                <input type="number" name="phone_no" id="phone_no" placeholder="Enter your phone number" value={formData.phone_no} onChange={handleChange} />
                                {errors.phone_no && <span className="invalid-feedback">{errors.phone_no}</span>}
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="account_type">Account Type</label>
                                        <select name="account_type" id="account type" value={formData.account_type} onChange={handleChange}>
                                            <option>Select your account type</option>
                                            <option value="Current">Current</option>
                                            <option value="Savings">Savings</option>
                                            <option value="Fixed">Fixed</option>
                                        </select>
                                        {errors.gender && <span className="invalid-feedback">{errors.gender}</span>}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group ms-3">
                                        <label htmlFor="gender">Gender</label>
                                        <select name="gender" id="gender" value={formData.gender} onChange={handleChange}>
                                            <option>Select your gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                        {errors.gender && <span className="invalid-feedback">{errors.gender}</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="street_address">Street Address</label>
                                <input type="text" name="street_address" id="street_address" placeholder="Enter your street address" value={formData.street_address} onChange={handleChange} />
                                {errors.street_address && <span className="invalid-feedback">{errors.street_address}</span>}
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="zip_code">Zip Code</label>
                                        <input type="number" name="zip_code" id="zip_code" placeholder="Enter your zip code" value={formData.zip_code} onChange={handleChange} />
                                        {errors.zip_code && <span className="invalid-feedback">{errors.zip_code}</span>}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group ms-3">
                                        <label htmlFor="city">City</label>
                                        <input type="text" name="city" id="city" placeholder="Enter your city" value={formData.city} onChange={handleChange} />
                                        {errors.city && <span className="invalid-feedback">{errors.city}</span>}
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="state">State</label>
                                        <input type="text" name="state" id="state" placeholder="Enter your State" value={formData.state} onChange={handleChange} />
                                        {errors.state && <span className="invalid-feedback">{errors.state}</span>}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group ms-3">
                                        <label htmlFor="country">Country</label>
                                        <input type="text" name="country" id="country" placeholder="Enter your country" value={formData.country} onChange={handleChange} />
                                        {errors.country && <span className="invalid-feedback">{errors.country}</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="birth_year">Birth Year</label>
                                        <input type="number" name="birth_year" id="birth_year" value={formData.birth_year} onChange={handleChange} />
                                        {errors.birth_year && <span className="invalid-feedback">{errors.birth_year}</span>}
                                    </div>
                                </div>
                                <div className="col-6 col-md-4">
                                    <div className="form-group ms-3 birth_month">
                                        <label htmlFor="birth_month">Birth Month</label>
                                        <input type="number" name="birth_month" id="birth_month" value={formData.birth_month} onChange={handleChange} />
                                        {errors.birth_month && <span className="invalid-feedback">{errors.birth_month}</span>}
                                    </div>
                                </div>
                                <div className="col-6 col-md-4">
                                    <div className="form-group ms-3">
                                        <label htmlFor="birth_date">Birth Date</label>
                                        <input type="number" name="birth_date" id="birth_date" value={formData.birth_date} onChange={handleChange} />
                                        {errors.birth_date && <span className="invalid-feedback">{errors.birth_date}</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="password" id="password" placeholder="Enter your strong password" value={formData.password} onChange={handleChange} />
                                        {errors.password && <span className="invalid-feedback">{errors.password}</span>}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group ms-3">
                                        <label htmlFor="confirm_password">Confirm Password</label>
                                        <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm Password" value={formData.confirm_password} onChange={handleChange} />
                                        {errors.confirm_password && <span className="invalid-feedback">{errors.confirm_password}</span>}
                                    </div>
                                </div>
                            </div>

                            {message && <div className="alert alert-success mt-3 regi-submit-alert" role="alert"> <p><i className="bi bi-check-circle-fill"></i> {message} </p> </div>}
                            <div className="form-group">
                                {loading ? <button className="btn btn-dark"><div className="spinner-border spinner-border-sm" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div></button> : <input type="submit" className="btn btn-dark" value="Submit" />}
                                <p className="text-center">Already have an account?<Link href="/login"> Log in</Link></p>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;