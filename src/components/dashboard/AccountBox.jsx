'use client';
import Image from "next/image";
import deposit from '@/images/deposit.png'
import withdraw from '@/images/total_withdraw.png'
import transfer from '@/images/total_transfer.png'
import '@/css/dashboard_css/account_box.css';
import { useContext } from "react";
import { AuthContext } from "@/js/AuthContext";

const AccountBox = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <div className="dash-account-box">
                <div className="balance">
                   <div className="d-flex justify-content-between">
                        <div>
                        <h3>Total Balance</h3>
                        <h1>USD {user && user.profile.balance}</h1>
                        </div>
                        <div>
                            <h3>{user && user.profile.account_no}</h3>
                        </div>
                   </div>
                </div>
                <div>
                    <div className="d-flex align-items-center">
                        <div className="deposit">
                            <h6><Image src={deposit} alt="deposit" width={15} height={15} /> Deposit</h6>
                            <h3>USD {user && user.profile.deposit}</h3>
                        </div>
                        <div className="withdraw">
                            <h6><Image src={withdraw} alt="withdraw" width={15} height={15} /> Withdraw</h6>
                            <h3>USD {user && user.profile.withdraw}</h3>
                        </div>
                        <div className="transfer">
                            <h6><Image src={transfer} alt="transfer" width={15} height={15} /> Transfer</h6>
                            <h3>USD {user && user.profile.transfer}</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AccountBox;