import Image from "next/image";
import deposit from '@/images/deposit.png'
import withdraw from '@/images/total_withdraw.png'
import transfer from '@/images/total_transfer.png'
import '@/css/dashboard_css/account_box.css';

const AccountBox = () => {
    return (
        <div>
            <div className="dash-account-box">
                <div className="balance">
                    <h3>Total Balance</h3>
                    <h1>USD 1000.00</h1>
                </div>
                <div>
                    <div className="d-flex align-items-center">
                        <div className="deposit">
                            <h6><Image src={deposit} alt="deposit" width={15} height={15} /> Deposit</h6>
                            <h3>USD 1000.00</h3>
                        </div>
                        <div className="withdraw">
                            <h6><Image src={withdraw} alt="withdraw" width={15} height={15} /> Withdraw</h6>
                            <h3>USD 1000.00</h3>
                        </div>
                        <div className="transfer">
                            <h6><Image src={transfer} alt="transfer" width={15} height={15} /> Transfer</h6>
                            <h3>USD 1000.00</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AccountBox;