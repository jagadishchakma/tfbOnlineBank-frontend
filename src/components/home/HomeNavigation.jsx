'use client';
import Image from "next/image";
import logo from '@/images/logo.png';
import { useContext } from "react";
import { AuthContext } from "@/js/AuthContext";

const HomeNavigation = () => {
    const { user } = useContext(AuthContext);
    return (
        <nav className="navbar navbar-expand-lg bg-light fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#"><Image src={logo} alt="logo" width={200} height={60} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
                        <li className="nav-item d-flex align-items-center gap-2">
                            <i className="bi bi-chat"></i>
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                        <li className="nav-item d-flex align-items-center gap-2">
                            <i className="bi bi-file-person"></i>
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item d-flex align-items-center gap-2">
                            <i className="bi bi-geo-alt"></i>
                            <a className="nav-link" href="#">Locations</a>
                        </li>

                        {
                            user && user ? (
                                <>
                                    <li className="nav-item d-flex align-items-center">
                                        <a className="nav-link dashboard-go" href="/dashboard">Dashboard</a>
                                    </li>
                                   
                                </>
                            ) : (
                                <>
                                    <li className="nav-item d-flex align-items-center gap-2">
                                        <i className="bi bi-person"></i>
                                        <a className="nav-link" href="/registration">Sign Up</a>
                                    </li>
                                    <li className="nav-item d-flex align-items-center gap-2">
                                        <i className="bi bi-lock"></i>
                                        <a className="nav-link" href="/login">Log In</a>
                                    </li>
                                </>
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default HomeNavigation;