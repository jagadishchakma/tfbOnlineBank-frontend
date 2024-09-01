import Image from "next/image";
import logo from '@/images/logo_white.png'

const Footer = () => {
    return (
        <footer>
            <div className="container footer-top">
                <div className="row">
                    <div className="col-md-3 col-sm-4">
                        <h3><Image src={logo} alt="logo" width={150} height={40} /></h3>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">About TFB Bank</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Communities</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">TFB Bank Group</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Careers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Website Disclaimer</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-4">
                        <h3>Banking With Us</h3>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Internet Banking</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Mobile Banking</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">TFB Bank Security</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Rates and Charges</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Glossary</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-4">
                        <h3>Customer Services</h3>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Jobs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Press and media</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Legal</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-4">
                        <h3>Socials</h3>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Twitter</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Instagram</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Facebook</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">YouTube</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pinterest</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container footer-bottom">
                <div className="row">
                    <div className="col-md-6">
                        <h4>© 2024 TFB Bank. All Rights Reserved.</h4>
                    </div>
                    <div className="col-md-6">
                        <ul className="navbar-nav d-flex align-items-center justify-content-center flex-row gap-5">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Twitter</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Instagram</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Facebook</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">YouTube</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pinterest</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;