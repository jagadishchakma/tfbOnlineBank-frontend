'use client';
import Account from "@/components/global/Account";
import TopBar from "@/components/global/TopBar";
import { authApi } from "@/js/api";
import { AuthContext } from "@/js/AuthContext";
import { useContext, useState } from "react";

const page = () => {
    const [balance, setBalance] = useState(0);
    const [account_no, setAccountNo] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { setReloadUser, reloadUser } = useContext(AuthContext);
    const handleDeposit = async (e) => {
        setError('');
        setSuccess('')
        setLoading(true);
        e.preventDefault();
        if (balance < 500) {
            setError('Minimum deposite amount is 500 TK. You can\'t deposite less than')
            setLoading(false);
            return
        }
        if (balance > 10000000) {
            setError('Maximum deposite amount is 10 milion. You can\'t deposite more than')
            setLoading(false);
            return
        }
        try {
            await authApi.put('accounts/balance/update/', { balance: balance, account_no: account_no });
            setSuccess('Deposited successfull')
            setTimeout(() => {
                setLoading(false);
                setReloadUser(reloadUser + 1);
                window.location.reload();
            }, 1000);

        } catch (error) {
            setLoading(false);
            setError("Falied to deposited,something went wrong!")
        }
    }
    return (
        <div className="deposit">
            <TopBar title="Account Deposit" />
            <Account />
            <div className="deposit-box">
                <form onSubmit={handleDeposit}>
                    <div className="form-group">
                        <label htmlFor="account_no">Account number:</label>
                        <input type="text" id="account_no" name="account_no" value={account_no} onChange={(e) => setAccountNo(e.target.value)} placeholder="Enter your account number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="deposit_amount">Deposit Amount:</label>
                        <input type="number" id="deposit_amount" name="deposit_amount" value={balance} onChange={(e) => setBalance(e.target.value)} placeholder="Enter deposited amount" />
                        <span className="invalid-feedback">{error && error}</span>
                        <span className="valid-feedback">{success && success}</span>
                    </div>
                    <div className="form-group">
                        {loading ? <button className="btn btn-light"><div className="spinner-border spinner-border-sm" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div></button> : <input type="submit" className="btn btn-light" value="Deposit" />}
                    </div>

                </form>
            </div>
        </div>
    );
};

export default page;