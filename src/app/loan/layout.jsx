import TopBar from "@/components/global/TopBar";
import PrivateRoute from "@/js/PrivateRoute";
import '@/app/loan/deposit.css';

export const metadata = {
    title: 'Loan request or pay',
    description: 'TFB bank loan request or pay'
}
const LoanLayout = ({children}) => {
    return(
        <PrivateRoute>
            <TopBar title="Loan"/>
            {children}
        </PrivateRoute>
    )
};

export default LoanLayout;