
import PrivateRoute from "@/js/PrivateRoute";

const DashboardLayout = ({children}) => {
    return (
      <PrivateRoute>
        <nav>
          <ul>
            <li>dash1</li>
            <li>dash1</li>
            <li>dash1</li>
          </ul>
        </nav>
        {children}
      </PrivateRoute>
    );
};

export default DashboardLayout;