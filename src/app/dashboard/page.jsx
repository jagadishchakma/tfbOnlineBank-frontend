import AccountBox from "@/components/dashboard/AccountBox";
import Transaction from "@/components/transaction/Transaction";

const Dashboard = () => {
    return (
        <div className="dashboard mt-5">
            <div className="row">
                <div className="col-md-8">
                    <AccountBox />
                </div>
                <div className="col-md-4">
                    <Transaction />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;