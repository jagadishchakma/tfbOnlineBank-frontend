'use client'
import Account from "@/components/global/Account";
import { authApi } from "@/js/api";
import { AuthContext } from "@/js/AuthContext";
import formatTimestamp from "@/js/time";
import { useContext, useEffect, useState } from "react";

const Loan = () => {
    const [balance, setBalance] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loans, setLoans] = useState([]);

    const {user, setReloadUser, reloadUser } = useContext(AuthContext);
    const handleDeposit = async (e) => {
        setError('');
        setSuccess('')
        setLoading(true);
        e.preventDefault();
        if (balance < 500) {
            setError('Minimum loan amount is $500. You can\'t loan less than')
            setLoading(false);
            return
        }
        if (balance > 10000000) {
            setError('Maximum loan amount is $10 milion. You can\'t loan more than')
            setLoading(false);
            return
        }
        try {
            await authApi.post('accounts/loans/', { amount: balance });
            setSuccess('loan request successfully send.')
            setTimeout(() => {
                setLoading(false);
                setReloadUser(reloadUser + 1);
                window.location.href = '/transactions'
            }, 1000);

        } catch (error) {
            console.log(error)
            setLoading(false);
            setError("Falied to send loan request,something went wrong!")
        }
    }
    // get all loans
    useEffect(() => {
        const getLoans = async () => {
            const response = await authApi.get('accounts/loans/list/all/');
            setLoans(response.data);
        }
        getLoans();
    }, [reloadUser]);

    // payment loan amount
    const loanPayment = (id,amount) => {
        if(user && (user.profile.balance < amount)){
            alert("Insufficient Balance!");
        }else{
            const payLoans = async () => {
                const response = await authApi.put(`accounts/loan/pay/${id}/`)
                if(response.data.success){
                    setReloadUser(reloadUser + 1);
                    alert('Loan pyament successfull!')
                }
            }
            payLoans();
        }
    }
    return (
        <div className="deposit">
            <Account />
            <div className="row">
                <div className="col-md-6">
                    <div className="deposit-box mb-5" style={{width: '90%'}}>
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
                <div className="col-md-6">
                    {
                        loans.length > 0 && (
                            <div className="loan-box">
                                <h4>Loan History</h4>
                                {
                                    loans.map((loan, index) => {
                                        return (
                                            <div className="d-flex justify-content-between align-items-center mt-3" key={index}>
                                                <div>
                                                    <h6>{formatTimestamp(loan.created_at)}</h6>
                                                </div>
                                                <div>
                                                    <h6>${loan.amount}</h6>
                                                </div>
                                                <div>
                                                    { loan.pay?<button className="btn btn-success disabled">Paid</button>:<button className="btn btn-warning" onClick={()=>loanPayment(loan.id, loan.amount)}>Pay</button> }
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default Loan;