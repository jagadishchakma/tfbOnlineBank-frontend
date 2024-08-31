'use client'
import Account from "@/components/global/Account";
import { authApi } from "@/js/api";
import { AuthContext } from "@/js/AuthContext";
import { useContext, useState } from "react";

const Loan = () => {
    const [balance, setBalance] = useState('');
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
            setError('Minimum loan amount is 500 TK. You can\'t loan less than')
            setLoading(false);
            return
        }
        if (balance > 10000000) {
            setError('Maximum loan amount is 10 milion. You can\'t loan more than')
            setLoading(false);
            return
        }
        try {
            await authApi.post('accounts/loans/', { amount: balance });
            setSuccess('loan request successfully send.')
            setTimeout(() => {
                setLoading(false);
                setReloadUser(reloadUser + 1);
                window.location.reload();
            }, 1000);

        } catch (error) {
            console.log(error)
            setLoading(false);
            setError("Falied to send loan request,something went wrong!")
        }
    }
    return (
        <div className="deposit">
            <Account />
            <div className="deposit-box">
                <form onSubmit={handleDeposit}>
                    <div className="form-group">
                        <label htmlFor="loan_amount">Loan Amount</label>
                        <input type="number" id="loan_amount" name="loan_amount" value={balance} onChange={(e) => setBalance(e.target.value)} placeholder="$0000" />
                        <span className="invalid-feedback">{error && error}</span>
                        <span className="valid-feedback">{success && success}</span>
                    </div>
                    <div className="form-group">
                        {loading ? <button className="btn btn-dark"><div className="spinner-border spinner-border-sm" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div></button> : <input type="submit" className="btn btn-dark" value="Request Loan" />}
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Loan;