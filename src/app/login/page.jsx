import '@/css/auth_css/login.css';

export const metadata = {
    title: 'Login',
    description: 'Login to your account',
}
const Login = () => {
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
                        <form>
                            <h1>Log in</h1>
                            <div className="form-group">
                                <label htmlFor="username">Account number</label>
                                <input type="text" id="username" name="username" placeholder="Enter your account" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" />
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn btn-dark" value="Login" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;