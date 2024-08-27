import '@/app/transfer/deposit.css';
import PrivateRoute from '@/js/PrivateRoute';

export const metadata = {
    title: 'Deposit',
    description: 'Deposit to your account',
}

const TransferLayout = ({ children }) => {
    return <PrivateRoute>{children}</PrivateRoute>
};

export default TransferLayout;