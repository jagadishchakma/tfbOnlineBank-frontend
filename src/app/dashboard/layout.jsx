import TopBar from "@/components/global/TopBar";
import PrivateRoute from "@/js/PrivateRoute";

export const metadata = {
  title: "TFB Dashboard",
  description: "TFB online banking is banking platform service for valuable customer.",
};
const DashboardLayout = ({children}) => {
    return (
      <PrivateRoute>
        <nav>
         <TopBar title="Dashboard"/>
        </nav>
        {children}
      </PrivateRoute>
    );
};

export default DashboardLayout;