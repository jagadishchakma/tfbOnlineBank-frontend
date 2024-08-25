import '@/css/auth_css/registration.css';

export const metadata = {
    title: 'Login',
    description: 'Login to your account',
}
const Login = () => {
    return (
        <div className="registration">
            <div className="row">
                <div className="col-md-6">
                    <div className="registration-logo">
                        <img src='/images/login_image.png' alt="tfb online banking logo" width="100%" />
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <div className="brand-name">
                        <h1>TFB</h1>
                        <p>Online Banking</p>
                    </div>
                    <div className="registration-form">
                        <form>
                            <h1>Registration</h1>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="fname">First Name</label>
                                        <input type="text" name="fname" placeholder="Enter your first name" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group ms-3">
                                        <label htmlFor="fname">Last Name</label>
                                        <input type="text" name="lname" placeholder="Enter your last name" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" placeholder="Enter your email" />
                            </div>
                           <div className="row">
                               <div className="col-6">
                                   <div className="form-group">
                                       <label htmlFor="phone">Phone Number</label>
                                       <input type="number" name="phone" placeholder="Enter your phone number"/>
                                   </div>
                               </div>
                               <div className="col-6">
                                   <div className="form-group ms-3">
                                       <label htmlFor="gender">Gender</label>
                                       <select name="gender">
                                           <option value="male">Male</option>
                                           <option value="female">Female</option>
                                       </select>
                                   </div>
                               </div>
                           </div>
                            <div className="form-group">
                                <label htmlFor="street">Street Address</label>
                                <input type="text" name="stree" placeholder="Enter your street address"/>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                <div className="form-group">
                                        <label htmlFor="zipcode">Zip Code</label>
                                        <input type="number" name="zipcode" placeholder="Enter your zip code" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group ms-3">
                                        <label htmlFor="city">City</label>
                                        <input type="text" name="city" placeholder="Enter your city" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="state">State</label>
                                        <input type="text" name="state" placeholder="Enter your State" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group ms-3">
                                        <label htmlFor="country">Country</label>
                                        <input type="text" name="country" placeholder="Enter your country" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="year">Birth Year</label>
                                        <input type="number" name="year"/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="month">Birth Month</label>
                                        <input type="number" name="month"/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="date">Birth Date</label>
                                        <input type="number" name="date"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="password" placeholder="Enter your strong password"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group ms-3">
                                        <label htmlFor="confirm_password">Confirm Password</label>
                                        <input type="password" name="confirm_password" placeholder="Confirm Password" />
                                    </div>
                                </div>
                            </div>


                            <div className="form-group">
                                <input type="submit" className="btn btn-dark" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;