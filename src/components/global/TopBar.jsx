'use client';
import '@/css/global_css/topbar.css';
import '@/css/transaction_css/transaction.css'
import { useContext, useEffect, useState } from "react";
import { authApi } from "@/js/api";
import { AuthContext } from "@/js/AuthContext";
import Link from 'next/link';
import deposit from '@/images/deposit.png'
import withdraw from '@/images/total_withdraw.png'
import transfer from '@/images/total_transfer.png'
import nav from '@/images/nav.png'
import registration from '@/images/registration.png'
import loan from '@/images/loan.png'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const TopBar = ({ title }) => {
    const [notification, setNotification] = useState([]);
    const { user, setReloadUser, reloadUser, logout, setToggler, toggler } = useContext(AuthContext);
    useEffect(() => {
        const fetchTransactions = async () => {
            const result = await authApi.get('accounts/transactions/');
            setNotification(result.data);
        };
        fetchTransactions();
    }, [reloadUser]);
    const router = useRouter()
    const handleNotification = async () => {
        await authApi.put('accounts/transactions/list/read/update/')
    }

    return (
        <div className="top-bar w-100">
            <div className="d-flex justify-content-between align-items-center gap-3">
                <div className="mobile-nav" id="nav-toggle" onClick={()=>setToggler(!toggler)}>
                    <Image src={nav} alt="Menu" width={30} heigth={30}/>
                </div>
                <h4 className="top-bar-title">{title}</h4>
                <div className="top-bar-profile d-flex justify-content-center align-items-center gap-3">
                    <div className="notification dropdown">
                        <i className="bi bi-bell-fill dropdown-toggle" id="notification" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onMouseUp={handleNotification}>
                            {notification.length > 0 && <span className="badge">{notification.length}</span>}
                        </i>
                        <div className={notification.length > 0 ? "dropdown-menu" : "dropdown-menu drop-css-none"} id="notification-drop">
                            <div className="transaction-list" onClick={()=>router.push('/transactions')}>
                                {notification.map((transaction, index) => (
                                    <div className="d-flex justify-content-between align-items-center gap-2 mb-3" key={transaction.id}>
                                        <div>
                                            {transaction.type == "Deposited" && <div className={`img-div-${transaction.type}`}><Image src={deposit} alt="deposit" width={20} height={20} /></div>}
                                            {transaction.type == "Withdraw" && <div className={`img-div-${transaction.type}`}><Image src={withdraw} alt="withdraw" width={20} height={20} /></div>}
                                            {transaction.type == "Transfer" && <div className={`img-div-${transaction.type}`}><Image src={transfer} alt="transfer" width={20} height={20} /></div>}
                                            {transaction.type == "Registration" && <div className={`img-div-${transaction.type}`}><Image src={registration} alt="registration" width={20} height={20} /></div>}
                                            {transaction.type == "Loan" && <div className={`img-div-${transaction.type}`}><Image src={loan} alt="registration" width={20} height={20} /></div>}
                                        </div>
                                        <div>
                                            <h6>{transaction.type}</h6>
                                            <p>{transaction.message.slice(0,20)}...</p>
                                        </div>
                                        <div>
                                            <h6>${transaction.amount}</h6>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
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
                                <li><Link className="dropdown-item" href="/settings">Settings</Link></li>
                                <li><a className="dropdown-item" href="#" onClick={logout}>Log out</a></li>

                            </ul>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;