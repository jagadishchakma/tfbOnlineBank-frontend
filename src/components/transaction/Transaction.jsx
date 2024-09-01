'use client';

import { authApi } from "@/js/api";
import { useEffect, useState } from "react";
import '@/css/transaction_css/transaction.css';
import Image from "next/image";
import deposit from '@/images/deposit.png'
import withdraw from '@/images/total_withdraw.png'
import transfer from '@/images/total_transfer.png'
import notFound from '@/images/not_found.png'
import registration from '@/images/registration.png'
import loan from '@/images/loan.png'
import { useRouter } from "next/navigation";
import Link from "next/link";

const Transaction = () => {
    const [type, setType] = useState('list/all/');
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter()
    useEffect(() => {
        const getTransactions = async () => {
            setLoading(true);
            setTransactions([]);
            const response = await authApi.get(`accounts/transactions/${type}`);
            setTransactions(response.data);
            setLoading(false);
        }
        getTransactions();
    }, [type]);

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <h4>Transactions</h4>
                <button className="btn" onClick={()=>router.push('/transactions')}>View all</button>
            </div>
            <ul className="d-flex justify-content-start align-items-center gap-3 transaction-menu" id="transaction-menu">
                <li onClick={() => setType('list/all/')} className={type == 'list/all/' ? 'active' : 'inactive'}>All</li>
                <li onClick={() => setType('Deposited/')} className={type == 'Deposited/' ? 'active' : 'inactive'}>Deposit</li>
                <li onClick={() => setType('Withdraw/')} className={type == 'Withdraw/' ? 'active' : 'inactive'}>Withdraw</li>
                <li onClick={() => setType('Transfer/')} className={type == 'Transfer/' ? 'active' : 'inactive'}>Transfer</li>
                <li onClick={() => setType('Loan/')} className={type == 'Loan/' ? 'active' : 'inactive'}>Loan</li>
            </ul>
            {
                loading && (
                    <div className="spinner-border mt-5 ms-5" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )
            }
            {
                transactions.length < 1 && <Image src={notFound} alt="not-found" width={100} height={100} className="mt-5 ms-5"/>
            }
            <div className="transaction-list">
                {transactions.slice(0,5).map((transaction, index) => (
                    <Link href={`/transactions/${transaction.id}`} className="d-flex justify-content-between align-items-center row mt-4" key={transaction.id} id={transaction.read?'read':'unread'}>
                        <div className="col-2">
                            {transaction.type == "Deposited" && <div className={`img-div-${transaction.type}`}><Image src={deposit} alt="deposit" width={20} height={20} /></div>}
                            {transaction.type == "Withdraw" && <div className={`img-div-${transaction.type}`}><Image src={withdraw} alt="withdraw" width={20} height={20} /></div>}
                            {transaction.type == "Transfer" && <div className={`img-div-${transaction.type}`}><Image src={transfer} alt="transfer" width={20} height={20} /></div>}
                            {transaction.type == "Registration" && <div className={`img-div-${transaction.type}`}><Image src={registration} alt="registration" width={20} height={20} /></div>}
                            {transaction.type == "Loan" && <div className={`img-div-${transaction.type}`}><Image src={loan} alt="registration" width={20} height={20} /></div>}
                        </div>
                        <div className="col-8">
                            <h6>{transaction.type}</h6>
                            <p>{transaction.message}</p>
                        </div>
                        <div className="col-2">
                            <h6>${transaction.amount}</h6>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Transaction;