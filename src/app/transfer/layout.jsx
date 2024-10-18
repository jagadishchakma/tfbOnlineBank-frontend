import '@/app/transfer/deposit.css';
import PrivateRoute from '@/js/PrivateRoute';

export const metadata = {
    title: 'Transfer',
    description: 'Transfer to your account',
}

const TransferLayout = ({ children }) => {
    return <PrivateRoute>{children}</PrivateRoute>
};

export default TransferLayout;