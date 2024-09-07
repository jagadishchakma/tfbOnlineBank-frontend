'use client';
import Account from "@/components/global/Account";
import TopBar from "@/components/global/TopBar";
import { authApi } from "@/js/api";
import { AuthContext } from "@/js/AuthContext";
import { useContext, useState } from "react";

const Withdraw = () => {
    const [balance, setBalance] = useState('');
    const [account_no, setAccountNo] = useState('');
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
            setError('Minimum withdraw amount is $500. You can\'t withdraw less than')
            setLoading(false);
            return
        }
        if (balance > (user && user.profile.balance)) {
            setError('Insufficient Balance')
            setLoading(false);
            return
        }
        try {
            await authApi.put('accounts/balance/withdraw/', { balance: balance, account_no: account_no });
            setSuccess('Withdraw successfull')
            setTimeout(() => {
                setLoading(false);
                setReloadUser(reloadUser + 1);
               window.location.href = '/transactions'
            }, 1000);

        } catch (error) {
            setLoading(false);
            setError("Falied to withdraw,something went wrong!")
        }
    }
    return (
        <div className="deposit">
            <TopBar title="Account Deposit" />
            <Account />
            <div className="deposit-box">
                <form onSubmit={handleDeposit}>
                    <div className="form-group">
                        <label htmlFor="account_no">Account number</label>
                        <input type="text" id="account_no" name="account_no" value={account_no} onChange={(e) => setAccountNo(e.target.value)} placeholder="900563869402" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="deposit_amount">Withdraw Amount</label>
                        <input type="number" id="deposit_amount" name="deposit_amount" value={balance} onChange={(e) => setBalance(e.target.value)} placeholder="$0000" />
                        <span className="invalid-feedback">{error && error}</span>
                        <span className="valid-feedback">{success && success}</span>
                    </div>
                    <div className="form-group">
                        {loading ? <button className="btn btn-dark"><div className="spinner-border spinner-border-sm" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div></button> : <input type="submit" className="btn btn-dark" value="Withdraw" />}
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Withdraw;