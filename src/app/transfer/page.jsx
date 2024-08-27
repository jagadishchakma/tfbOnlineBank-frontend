'use client';
import Account from "@/components/global/Account";
import TopBar from "@/components/global/TopBar";
import { authApi } from "@/js/api";
import { AuthContext } from "@/js/AuthContext";
import { useContext, useState } from "react";

const Transfer = () => {
    const [balance, setBalance] = useState(0);
    const [receiver_account_no, setReceiverAccountNo] = useState('');
    const [sender_account_no, setSenderAccountNo] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const {user, setReloadUser, reloadUser } = useContext(AuthContext);
    const handleDeposit = async (e) => {
        setError('');
        setSuccess('')
        setLoading(true);
        e.preventDefault();
        if (balance < 500) {
            setError('Minimum transfer amount is 500 TK. You can\'t transfer less than')
            setLoading(false);
            return
        }
        if (balance > (user && user.profile.balance)) {
            setError('Insufficient Balance')
            setLoading(false);
            return
        }
        try {
            await authApi.put('accounts/balance/transfer/', { balance: balance, receiver_account_no: receiver_account_no, sender_account_no:sender_account_no });
            setSuccess('Transfer successfull')
            setTimeout(() => {
                setLoading(false);
                setReloadUser(reloadUser + 1);
                window.location.reload();
            }, 1000);

        } catch (error) {
            setLoading(false);
            setError("Falied to transfer,something went wrong!")
        }
    }
    return (
        <div className="deposit">
            <TopBar title="Balance Transfer" />
            <Account />
            <div className="deposit-box">
                <form onSubmit={handleDeposit}>
                    <div className="form-group">
                        <label htmlFor="receiver_account_no">Receiver Account Number:</label>
                        <input type="text" id="receiver_account_no" name="receiver_account_no" value={receiver_account_no} onChange={(e) => setReceiverAccountNo(e.target.value)} placeholder="Enter receiver account number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sender_account_no">Your Account Number:</label>
                        <input type="text" id="sender_account_no" name="sender_account_no" value={sender_account_no} onChange={(e) => setSenderAccountNo(e.target.value)} placeholder="Enter your account number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="transfer_amount">Transfer Amount:</label>
                        <input type="number" id="transfer_amount" name="deposit_amount" value={balance} onChange={(e) => setBalance(e.target.value)} placeholder="Enter transfer amount" />
                        <span className="invalid-feedback">{error && error}</span>
                        <span className="valid-feedback">{success && success}</span>
                    </div>
                    <div className="form-group">
                        {loading ? <button className="btn btn-light"><div className="spinner-border spinner-border-sm" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div></button> : <input type="submit" className="btn btn-light" value="Transfer" />}
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Transfer;