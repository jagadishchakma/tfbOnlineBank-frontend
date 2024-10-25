import AccountBox from "@/components/dashboard/AccountBox";
import BarChart from "@/components/dashboard/BarChart";
import QuickTransfer from "@/components/transaction/QuickTransfer";
import Transaction from "@/components/transaction/Transaction";

const Dashboard = () => {
    return (
        <div className="dashboard mt-5">
            <div className="row">
                <div className="col-md-8">
                    <AccountBox />
                    <BarChart/>
                    <QuickTransfer/>
                </div>
                <div className="col-md-4">
                    <Transaction />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;