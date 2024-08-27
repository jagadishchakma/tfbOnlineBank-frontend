'use client';
import '@/css/global_css/topbar.css';
import { useContext, useEffect, useState } from "react";
import { authApi } from "@/js/api";
import { AuthContext } from "@/js/AuthContext";

const TopBar = ({ title }) => {
    const [notification,setNotification] = useState([]);
    const {user, setReloadUser, reloadUser} = useContext(AuthContext);
    useEffect(() => {
        const fetchTransactions = async () => {
          const result = await authApi.get('accounts/transactions/');
          setNotification(result.data);
        };
        fetchTransactions();
      }, [reloadUser]);
    return (
        <div className="top-bar w-100">
            <div className="d-flex justify-content-between align-items-center">
                <div className="top-bar-title">
                    <h4>{title}</h4>
                </div>
                <div className="top-bar-profile d-flex justify-content-center align-items-center gap-3">
                    <div className="notification dropdown">
                        <i className="bi bi-bell-fill dropdown-toggle" id="notification" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {notification.length > 0 && <span className="badge">{notification.length}</span>}
                        </i>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div className="profile-image">
                        {user && <img src={user.profile.image} alt="profile" width='30' height='30' />}
                        
                    </div>
                    <div className="profile-settings navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Jagadish
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;