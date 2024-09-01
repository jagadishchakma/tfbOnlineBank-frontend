'use client'
import Account from '@/components/global/Account';
import TopBar from '@/components/global/TopBar';
import { authApi } from '@/js/api';
import { useParams } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import success from '@/images/success.png';
import Image from 'next/image';
import { AuthContext } from '@/js/AuthContext';
import '@/css/transaction_css/transaction_detail.css';
import time from '@/js/time.js';

const Details = () => {
    const [transaction, setTransaction] = useState({});
    const params = useParams();
    const { id } = params;
    useEffect(() => {
        const getTransaction = async () => {
            const response = await authApi.get(`accounts/transaction/${id}/`)
                             await authApi.put(`accounts/transaction/read/update/${id}/`)
            setTransaction(response.data)
            console.log(response);
        }
        getTransaction();
    }, [])
    const { user } = useContext(AuthContext);

    return (
        <div>
            <TopBar title="Transaction Details" />
            <Account />
            <div className="detail-box">
                <div className="row">
                    <div className="top-message">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>{transaction && transaction.message}</h2>
                            <Image src={success} alt="Ok" width={50} height={50} />
                        </div>
                    </div>
                    <div className="detail-profile">
                        <div className="d-flex align-items-center gap-4">
                            <div className="detail-profile-img">
                                <img src={user && user.profile.image} alt={user && user.username} width="60" height="70" />
                            </div>
                            <div className="detail-profile-info">
                                <p>{user && user.username}</p>
                                <p>{user && user.profile.account_no}</p>
                            </div>
                        </div>
                    </div>
                    <div className="body-message">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>
                                        <p>Time</p>
                                        <p>{time(transaction.date)}</p>
                                    </td>
                                    <td>
                                        <p>Type</p>
                                        <p>{transaction.type}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Amount</p>
                                        <p>${transaction.amount}</p>
                                    </td>
                                    <td>
                                        <p>New Available Balance</p>
                                        <p>${user && user.profile.balance}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;