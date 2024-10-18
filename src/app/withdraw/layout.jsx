import '@/app/deposit/deposit.css';
import PrivateRoute from '@/js/PrivateRoute';

export const metadata = {
    title: 'Withdraw',
    description: 'Withdraw to your account',
}

const WithdrawLayout = ({ children }) => {
    return <PrivateRoute>{children}</PrivateRoute>
};

export default WithdrawLayout;