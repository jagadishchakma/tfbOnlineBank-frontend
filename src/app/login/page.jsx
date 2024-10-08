'use client';
import '@/css/auth_css/login.css';
import { AuthContext } from '@/js/AuthContext';
import Link from 'next/link';
import { useContext, useState } from 'react';
import logo from '@/images/logo.png';
import Image from 'next/image';
import login_logo from '@/images/login.png';


const Login = () => {
    const [account_no, setAccountNo] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState({ msg: '', color: '', icon: '' });
    const [loading, setLoading] = useState(false);

    const { login } = useContext(AuthContext);
    //login handle
    const handleLogin = async (e) => {
        setLoading(true)
        e.preventDefault();
        let result = await login({ account_no, password });
        setLoading(false)
        console.log(result)
        if (result == 'error') {
            setError("Login Failed")
        } else {
            window.location.href = '/dashboard'
        }
    };

    return (
        <div className="login">
            <div className="d-flex align-items-center justify-content-around">
                <Link href="/" className="brand-name">
                    <Image src={logo} alt="logo" width={170} height={50} />
                </Link>
                <div className="login-form">
                    {error && <div className="alert alert-danger mt-3">{error}</div>}
                    {message.msg && !error && <div className={`alert alert-${message.color} mt-3 mb-3`} role="alert"> <i className={`bi ${message.icon}`}></i> {message.msg}  </div>}
                    <form onSubmit={handleLogin}>
                        <h1 className="text-center">Log in</h1>
                        <div className="form-group">
                            <label htmlFor="account_no">Account number</label>
                            <input
                                type="text"
                                id="account_no"
                                name="account_no"
                                placeholder="Enter your account number"
                                value={account_no}
                                onChange={(e) => setAccountNo(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            {
                                loading ? (
                                    <div className="btn btn-dark d-felx justify-content-center w-100">
                                        <div className="spinner-border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                ) : (
                                    <input
                                        type="submit"
                                        className="btn btn-dark"
                                        value="Login"
                                    />
                                )
                            }

                            <p className="text-center">Not have an account?<Link href="/registration"> Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;