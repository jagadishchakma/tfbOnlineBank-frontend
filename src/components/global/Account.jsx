import Image from "next/image";
import available_balance from '@/images/available_balance.png';
import total_deposit from '@/images/total_deposit.png';
import total_withdraw from '@/images/total_withdraw.png';
import total_transfer from '@/images/total_transfer.png';
import '@/css/global_css/account.css';
import { useContext } from "react";
import { AuthContext } from "@/js/AuthContext";

const Account = () => {
    const {user} = useContext(AuthContext);
    return ( 
        <div className="d-flex justify-content-start align-items-center account-balance gap-3" id="account-balance">
            <div className="available-balance account-box">
                <div>
                    <Image src={available_balance} alt="avialble_balance" width={20} height={20} />
                </div>
                <div>
                    <p>Total Available</p>
                    <h5>${user && user.profile.balance}</h5>
                </div>
            </div>
            <div className="total-deposit-balance account-box">
                <div>
                    <Image src={total_deposit} alt="total_deposit" width={20} height={20} />
                </div>
                <div>
                    <p>Total Deposit</p>
                    <h5>$3000</h5>
                </div>
            </div>
            <div className="total-withdraw-balance account-box">
                <div>
                    <Image src={total_withdraw} alt="total_withdraw" width={20} height={20} />
                </div>
                <div>
                    <p>Total Withdraw</p>
                    <h5>${user && user.profile.withdraw}</h5>
                </div>
            </div>
            <div className="totla-transfer-balance account-box">
                <div>
                    <Image src={total_transfer} alt="total_transfer" width={20} height={20} />
                </div>
                <div>
                    <p>Total Transfer</p>
                    <h5>${user && user.profile.transfer}</h5>
                </div>
            </div>
        </div>
    );
};

export default Account;