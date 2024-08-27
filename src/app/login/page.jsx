'use client';
import '@/css/auth_css/login.css';
import { AuthContext } from '@/js/AuthContext';
import { useContext, useState } from 'react';


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
            window.location.href = '/'
        }
    };

    return (
        <div className="login">
            <div className="row">
                <div className="col-md-6">
                    <div className="login-logo">
                        <img src='/images/login_image.png' alt="tfb online banking logo" width="100%" />
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <div className="brand-name">
                        <h1>TFB</h1>
                        <p>Online Banking</p>
                    </div>
                    <div className="login-form">
                        {error && <div className="alert alert-danger mt-3">{error}</div>}
                        {message.msg && !error && <div className={`alert alert-${message.color} mt-3 mb-3`} role="alert"> <i className={`bi ${message.icon}`}></i> {message.msg}  </div>}
                        <form onSubmit={handleLogin}>
                            <h1>Log in</h1>
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
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="submit"
                                    className="btn btn-dark"
                                    value="Login"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;